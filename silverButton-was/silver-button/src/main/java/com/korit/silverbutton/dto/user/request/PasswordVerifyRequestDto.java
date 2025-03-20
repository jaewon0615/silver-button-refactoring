package com.korit.silverbutton.dto.user.request;

public class PasswordVerifyRequestDto {
    private String currentPassword;  // 기존 비밀번호
    private String secondPassword;   // 2차 비밀번호

    // 기존 비밀번호 getter/setter
    public String getCurrentPassword() {
        return currentPassword;
    }

    public void setCurrentPassword(String currentPassword) {
        this.currentPassword = currentPassword;
    }

    // 2차 비밀번호 getter/setter
    public String getSecondPassword() {
        return secondPassword;
    }

    public void setSecondPassword(String secondPassword) {
        this.secondPassword = secondPassword;
    }
}
