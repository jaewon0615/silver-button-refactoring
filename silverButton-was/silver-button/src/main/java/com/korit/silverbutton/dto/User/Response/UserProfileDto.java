package com.korit.silverbutton.dto.user.response;

import com.korit.silverbutton.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserProfileDto {
    private String userId;

    private String password;

    private String name;

    private String phone;

    private String email;

    private String nickname;

    private  Long protectorId;

    public UserProfileDto(User user){

        this.userId= user.getUserId();
        this.password= user.getPassword();
        this.name= user.getName();
        this.phone= user.getPhone();
        this.email= user.getEmail();
        this.nickname= user.getNickname();
        this.protectorId= user.getProtectorId();
    }
}
