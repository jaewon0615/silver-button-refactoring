package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.dependent.response.DependentResponseDto;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.signIn.request.SignInRequestDto;
import com.korit.silverbutton.dto.signIn.response.SignInResponseDto;

import com.korit.silverbutton.dto.UpdateRequestDto;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.repository.UserRepository;

import com.korit.silverbutton.service.DependentService;
import com.korit.silverbutton.service.ProfileImgService;
import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DependentServiceImpl implements DependentService {

    private final UserRepository userRepository;
    private final ProfileImgService profileImgService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public ResponseDto<SignInResponseDto> depenLogin(SignInRequestDto dto) {
        try {
            User user = userRepository.findByRoleAndNameAndPhone(dto.getRole(),dto.getName(), dto.getPhone());
            if (user == null) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }

            if (!bCryptPasswordEncoder.matches(dto.getPassword(), user.getPassword())) {
                return ResponseDto.setFailed(ResponseMessage.NOT_MATCH_PASSWORD);
            }

            DependentResponseDto dependentResponseDto = new DependentResponseDto(user);
            SignInResponseDto signInResponseDto = new SignInResponseDto(user);

            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, signInResponseDto);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    @Override
    public ResponseDto<DependentResponseDto> signInDepen(String role,String name, String phone) {
        DependentResponseDto dependentResponseDto = null;
        try {
            User user = userRepository.findByRoleAndNameAndPhone(role,name, phone);

            if (user == null) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }
            if (!"노인".equals(user.getRole())) {
                return ResponseDto.setFailed(ResponseMessage.NO_PERMISSION);
            }
            dependentResponseDto = new DependentResponseDto(user);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, dependentResponseDto);
    }

    @Override
    public ResponseDto<DependentResponseDto> getAllDepen(Long id, String userId) {
        try{

        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return null;
    }


    @Override
    public ResponseDto<DependentResponseDto> updateDepen(UpdateRequestDto dto, PrincipalUser principalUser) {
        DependentResponseDto data = null;
        String email = dto.getEmail();
        String name = dto.getName();
        String phone = dto.getPhone();
        String nickname = dto.getNickname();

        String role = principalUser.getRole();
        try{
            User user = userRepository.findByRoleAndNameAndPhone(principalUser.getRole(), name, phone);

            if (user == null) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }
            if (!user.getName().equals(principalUser.getName()) || !user.getPhone().equals(principalUser.getPhone())) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }
            user = user.toBuilder()
                    .email(email != null ? email : user.getEmail())
                    .name(name != null ? name : user.getName())
                    .phone(phone != null ? phone : user.getPhone())
                    .nickname(nickname != null ? nickname : user.getNickname())
                    .build();

            userRepository.save(user);

            data = new DependentResponseDto(user);


        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);

    }

    @Override
    public ResponseDto<Void> deleteDepen(String role, String name, String phone) {

        ResponseDto<Void> data = null;
        try {
            User user = userRepository.findByRoleAndNameAndPhone(role, name, phone);

            if (user == null) ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);

            userRepository.delete(user);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);

        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, null);
    }
}
