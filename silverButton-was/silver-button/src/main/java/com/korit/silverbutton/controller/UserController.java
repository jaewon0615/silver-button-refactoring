package com.korit.silverbutton.controller;

import com.korit.silverbutton.common.constant.ApiMappingPattern;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.user.response.UserProfileDto;
import com.korit.silverbutton.dto.user.response.UserResponseDto;

import com.korit.silverbutton.dto.user.request.*;

import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping(ApiMappingPattern.MANAGE)
@RequiredArgsConstructor
public class UserController {
    private static final String MANAGE_GET_ALL = "/allusers";
    private static final String MANAGE_GET_PROFILE = "/profile";
    private static final String MANAGE_UPDATE = "/update";
    private static final String MANAGE_UPDATE_PASSWORD = "/update-password";
    private static final String MANAGE_POST_VERIFY = "/verify-password";
    private static final String MANAGE_DELETE = "/delete-account";
    private static final String MANAGE_UPLOAD_PROFILE_IMG = "/upload-profile-img";
    private static final String MANAGE_GET_PROFILE_IMG = "profile-img";

    private final @Lazy UserService userService;

    @GetMapping(MANAGE_GET_ALL)
    public ResponseEntity<ResponseDto<List<UserResponseDto>>> getAllUsers(
            @AuthenticationPrincipal PrincipalUser principalUser
    ) {
        ResponseDto<List<UserResponseDto>> response = userService.getAllUsers(principalUser.getUserId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(MANAGE_GET_PROFILE)
    public ResponseEntity<ResponseDto<UserProfileDto>> getuser(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<UserProfileDto> response= userService.getUser(principalUser.getUserId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @PutMapping(MANAGE_UPDATE)
    public ResponseEntity<ResponseDto<UserProfileDto>> updateUser(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody @Valid UserProfileDto dto
    ) {
        ResponseDto<UserProfileDto> response = userService.updateUser(principalUser.getUserId(), dto);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @PutMapping(MANAGE_UPDATE_PASSWORD)
    public ResponseEntity<ResponseDto<UserProfileDto>> updatePassword(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody @Valid UpdatePasswordRequestDto dto) {
        ResponseDto<UserProfileDto> response = userService.updatePassword(
                principalUser.getUserId(), dto.getCurrentPassword(), dto.getNewPassword());

        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @PostMapping(MANAGE_POST_VERIFY)
    public ResponseEntity<ResponseDto<Boolean>> verifyPassword(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody PasswordVerifyRequestDto dto
    ) {
        boolean isPasswordValid = userService.verifyPassword(principalUser.getUserId(), dto.getCurrentPassword());
        ResponseDto<Boolean> response = isPasswordValid ?
                ResponseDto.setSuccess("비밀번호가 일치합니다.", isPasswordValid) :
                ResponseDto.setFailed("비밀번호가 일치하지 않습니다.");

        HttpStatus status = isPasswordValid ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(MANAGE_DELETE)
    public ResponseEntity<ResponseDto<Void>> deleteUser(
            @AuthenticationPrincipal PrincipalUser principalUser
    ) {
        ResponseDto<Void> response = userService.deleteUser(principalUser.getUserId());
        HttpStatus status = response.isResult() ? HttpStatus.NO_CONTENT : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @PatchMapping(MANAGE_UPLOAD_PROFILE_IMG)
    public ResponseEntity<ResponseDto<String>> uploadProfileImg(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestParam("file") MultipartFile file) {

        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(ResponseDto.setFailed("No file uploaded"));
        }


        if (!file.getContentType().startsWith("image/")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(ResponseDto.setFailed("Invalid file type"));
        }

        ResponseDto<String> response = userService.uploadFile(principalUser.getUserId(), file);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(MANAGE_GET_PROFILE_IMG)
    public ResponseEntity<ResponseDto<String>> getProfileImg(@AuthenticationPrincipal PrincipalUser principalUser) {
        ResponseDto<String> response = userService.getProfileImg(principalUser.getUserId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }
}
