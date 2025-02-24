package com.korit.silverbutton.controller;

import com.korit.silverbutton.common.constant.ApiMappingPattern;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.User.Request.*;
import com.korit.silverbutton.dto.User.Response.UserProfileDto;
import com.korit.silverbutton.dto.User.Response.UserResponseDto;
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

    private final @Lazy UserService userService;

    @GetMapping("/allusers")
    public ResponseEntity<ResponseDto<List<UserResponseDto>>> getAllUsers(
            @AuthenticationPrincipal PrincipalUser principalUser
    ) {
        ResponseDto<List<UserResponseDto>> response = userService.getAllUsers(principalUser.getUserId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping("/profile")
    public ResponseEntity<ResponseDto<UserProfileDto>> getuser(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<UserProfileDto> response= userService.getUser(principalUser.getUserId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @PutMapping("/update")
    public ResponseEntity<ResponseDto<UserProfileDto>> updateUser(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody @Valid UserProfileDto dto
    ) {
        ResponseDto<UserProfileDto> response = userService.updateUser(principalUser.getUserId(), dto);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @PutMapping("/update-password")
    public ResponseEntity<ResponseDto<UserProfileDto>> updatePassword(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody @Valid UpdatePasswordRequestDto dto) {
        ResponseDto<UserProfileDto> response = userService.updatePassword(
                principalUser.getUserId(), dto.getCurrentPassword(), dto.getNewPassword());

        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @PostMapping("/verify-password")
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

    @DeleteMapping("/delete-account")
    public ResponseEntity<ResponseDto<Void>> deleteUser(
            @AuthenticationPrincipal PrincipalUser principalUser
    ) {
        ResponseDto<Void> response = userService.deleteUser(principalUser.getUserId());
        HttpStatus status = response.isResult() ? HttpStatus.NO_CONTENT : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @PatchMapping("/upload-profile-img")
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

    @GetMapping("/profile-img")
    public ResponseEntity<ResponseDto<String>> getProfileImg(@AuthenticationPrincipal PrincipalUser principalUser) {
        ResponseDto<String> response = userService.getProfileImg(principalUser.getUserId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }
}
