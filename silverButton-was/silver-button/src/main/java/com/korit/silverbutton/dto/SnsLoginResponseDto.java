package com.korit.silverbutton.dto;

import lombok.Data;

@Data
public class SnsLoginResponseDto {

    private String userId;
    private String email;
    private boolean isPasswordResetRequired;
    private String message;

    public SnsLoginResponseDto(String userId, String email, boolean isPasswordResetRequired, String message) {
        this.userId = userId;
        this.email = email;
        this.isPasswordResetRequired = isPasswordResetRequired;
        this.message = message;
    }

    public static SnsLoginResponseDto fromUser(String userId, String email, boolean isPasswordResetRequired, String message) {
        return new SnsLoginResponseDto(userId, email, isPasswordResetRequired, message);

    }


}
