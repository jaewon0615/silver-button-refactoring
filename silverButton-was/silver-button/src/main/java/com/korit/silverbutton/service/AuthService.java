package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.signIn.request.SignInRequestDto;
import com.korit.silverbutton.dto.signUp.request.SignUpRequestDto;

import com.korit.silverbutton.dto.signIn.response.SignInResponseDto;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.signUp.response.SignUpResponseDto;

public interface AuthService {
    ResponseDto<SignUpResponseDto> signUp(SignUpRequestDto dto);

    ResponseDto<SignInResponseDto> login(SignInRequestDto dto);

    ResponseDto<SignInResponseDto> dependentLogin(SignInRequestDto dto);

    ResponseDto<String> logout(String token);

    boolean overlapUserId(String userId);

    boolean overlapNickname(String nickName);


}