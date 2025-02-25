package com.korit.silverbutton.dto;

import jakarta.validation.constraints.NotBlank;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UpdateRequestDto {

    @NotBlank
    private String email;

    @NotBlank
    private String name;

    @NotBlank
    private String phone;

    @NotBlank
    private String password;

    @NotBlank
    private String nickname;

    @NotBlank
    private String profileImg;
}