package com.korit.silverbutton.dto.response;

import com.korit.silverbutton.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponseDto {
    private User user;

    private String token;

    private int exprTime;
}