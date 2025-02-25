package com.korit.silverbutton.dto.signIn.response;

import com.korit.silverbutton.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SignInResponseDto {
    private User user;

    private String token;

    private int exprTime;


    public SignInResponseDto(User user) {

    }
}