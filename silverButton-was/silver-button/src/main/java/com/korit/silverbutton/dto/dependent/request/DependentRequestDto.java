package com.korit.silverbutton.dto.dependent.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DependentRequestDto {
    private Long id;

    private String name;

    private String userId;

    private String phone;

    private String password;
}