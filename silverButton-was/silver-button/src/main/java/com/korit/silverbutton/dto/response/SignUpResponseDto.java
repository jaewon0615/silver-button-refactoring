package com.korit.silverbutton.dto.response;

import com.korit.silverbutton.entity.User;
import lombok.Data;

@Data
public class SignUpResponseDto {
    User user;

    public SignUpResponseDto(User user) {
        this.user= user;
    }
}