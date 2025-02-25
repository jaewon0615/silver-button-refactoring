package com.korit.silverbutton.service.implement;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;

import com.korit.silverbutton.common.constant.ResponseMessage;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.user.response.UserProfileDto;
import com.korit.silverbutton.dto.user.response.UserResponseDto;

import com.korit.silverbutton.entity.User;

import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.MailService;
import com.korit.silverbutton.service.ProfileImgService;
import com.korit.silverbutton.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ProfileImgService profileImgService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final MailService mailService;
    @Value("${spring.cloud.gcp.storage.bucket}")
    private String bucketName;

    @Autowired
    private Storage storage;

    @Override
    public ResponseDto<List<UserResponseDto>> getAllUsers(String userId) {
        try{
            Optional<User> userOptional = userRepository.findByUserId(userId);
            if (userOptional.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }

            List<User> allUsers = userRepository.findAll();
            List<UserResponseDto> data = allUsers.stream()
                    .map(UserResponseDto::new)
                    .toList();
            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    @Override
    public ResponseDto<UserProfileDto> getUser(String userId) {
        try {
            Optional<User> userOptional = userRepository.findByUserId(userId);

            if (userOptional.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }
            UserProfileDto userProfileDto = new UserProfileDto(userOptional.get());
            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, userProfileDto);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    @Override
    public ResponseDto<UserProfileDto> updateUser(String userId, UserProfileDto dto) {
        try {
            System.out.println("사용자"+userId);
            Optional<User> userOptional = userRepository.findByUserId(userId);
            if (userOptional.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }

            System.out.println("afasdfawefe");
            User user = userOptional.get();

            if (!user.getPhone().equals(dto.getPhone()) && userRepository.existsByPhone(dto.getPhone())) {
                return ResponseDto.setFailed(ResponseMessage.EXIST_USER);
            }

            if (!user.getNickname().equals(dto.getNickname()) && userRepository.existsByNickname(dto.getNickname())) {
                return ResponseDto.setFailed(ResponseMessage.EXIST_USER);
            }

            String encodedNewPassword = bCryptPasswordEncoder.encode(dto.getPassword());

            user = user.toBuilder()
                    .phone(dto.getPhone())
                    .nickname(dto.getNickname())
                    .password(encodedNewPassword)
                    .build();
            userRepository.save(user);
            UserProfileDto data = new UserProfileDto(user);
            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    @Override
    public ResponseDto<UserProfileDto> updatePassword(String userId, String currentPassword, String newPassword) {
        try {
            Optional<User> userOptional = userRepository.findByUserId(userId);
            if (userOptional.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }

            User user = userOptional.get();

            if (!bCryptPasswordEncoder.matches(currentPassword, user.getPassword())) {
                return ResponseDto.setFailed("CURRENT_PASSWORD_INCORRECT");
            }

            if (newPassword.length() < 8) {
                return ResponseDto.setFailed("NEW_PASSWORD_TOO_SHORT");
            }

            String encodedNewPassword = bCryptPasswordEncoder.encode(newPassword);

            user.setPassword(encodedNewPassword);

            userRepository.save(user);

            UserProfileDto data = new UserProfileDto(user);
            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    @Override
    public boolean verifyPassword(String userId, String currentPassword) {
        try {
            Optional<User> userOptional = userRepository.findByUserId(userId);
            if (userOptional.isEmpty()) {
                return false;
            }

            User user = userOptional.get();

            return bCryptPasswordEncoder.matches(currentPassword, user.getPassword());

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public ResponseDto<Void> deleteUser(String userId) {
        try {
            Optional<User> userOptional = userRepository.findByUserId(userId);
            if (userOptional.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }

            User user = userOptional.get();
            userRepository.delete(user);

            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, null);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    @Override
    public ResponseDto<String> uploadFile(String userId, MultipartFile file) {
        try {
            Optional<User> userOptional = userRepository.findByUserId(userId);
            if (userOptional.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }

            User user = userOptional.get();
            String currentProfileImg = user.getProfileImage();
            if (currentProfileImg != null && !currentProfileImg.isEmpty()) {
                String fileName = currentProfileImg.substring(currentProfileImg.lastIndexOf("/") + 1);
                Blob blob = storage.get(BlobId.of(bucketName, fileName));

                if (blob != null && blob.exists()) {
                    blob.delete();
                } else {
                    System.out.println("null");
                }
            }

            String uuid = UUID.randomUUID().toString();
            String ext = file.getContentType();

            BlobInfo blobInfo = storage.create(
                    BlobInfo.newBuilder(bucketName, uuid)
                            .setContentType(ext)
                            .build(),
                    file.getInputStream()
            );

            String profileImgUrl = String.format("https://storage.googleapis.com/%s/%s", bucketName, uuid);

            user.setProfileImage(profileImgUrl);
            userRepository.save(user);

            return ResponseDto.setSuccess("PROFILE_IMG_UPLOAD_SUCCESS", profileImgUrl);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed("PROFILE_IMG_UPDATE_FAIL");
        }
    }

    @Override
    public ResponseDto<Void> deleteFile(String filePath) {
        try {
            Optional<User> userOptional = userRepository.findByUserId(filePath);
            if (userOptional.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }

            User user = userOptional.get();
            String profileImg = user.getProfileImg();

            if (profileImg != null) {
                boolean deleted = profileImgService.deleteFile(profileImg);
                if (deleted) {
                    user.setProfileImg(null);
                    userRepository.save(user);
                    return ResponseDto.setSuccess("PROFILE_IMG_DELETE_SUCCESS", null);
                } else {
                    return ResponseDto.setFailed("PROFILE_IMG_DELETE_FAIL");
                }
            }
            return ResponseDto.setFailed("PROFILE_IMG_DELETE_FAIL");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed("PROFILE_IMG_DELETE_FAIL");
        }
    }

    @Override
    public ResponseDto<String> getProfileImg(String userId) {
        try {
            Optional<User> userOptional = userRepository.findByUserId(userId);
            if (userOptional.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }

            String profileImg = userOptional.get().getProfileImage();
            if (profileImg != null) {
                System.out.println(profileImg);
                return ResponseDto.setSuccess("PROFILE_IMG_FOUND", profileImg);
            }
            return ResponseDto.setFailed("PROFILE_IMG_NOT_FOUND");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed("PROFILE_IMG_NOT_FOUND");
        }
    }
}



