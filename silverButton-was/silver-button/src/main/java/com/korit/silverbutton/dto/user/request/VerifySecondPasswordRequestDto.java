package com.korit.silverbutton.dto.user.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class VerifySecondPasswordRequestDto {
    @NotBlank(message = "2차 비밀번호는 필수입니다.")
    private String secondPassword;  // 2차 비밀번호
}
