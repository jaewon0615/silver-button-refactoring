package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.UpdateRequestDto;
import com.korit.silverbutton.dto.User.Request.UserRequestDto;
import com.korit.silverbutton.dto.User.Response.UserProfileDto;
import com.korit.silverbutton.dto.User.Response.UserResponseDto;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface UserService {
    ResponseDto<List<UserResponseDto>> getAllUsers(String userId);

    ResponseDto<UserProfileDto> getUser(String userId);

    ResponseDto<UserProfileDto> updatePassword(String userId, String currentPassword, String newPassword);

    boolean verifyPassword(String userId, String currentPassword);


    ResponseDto<Void> deleteUser(String userId);

    ResponseDto<UserProfileDto> updateUser(String userId, UserProfileDto dto);

    ResponseDto<String> uploadFile(String userId, MultipartFile file);

    ResponseDto<Void> deleteFile(String filePath);

    ResponseDto<String> getProfileImg(String userId);

}

