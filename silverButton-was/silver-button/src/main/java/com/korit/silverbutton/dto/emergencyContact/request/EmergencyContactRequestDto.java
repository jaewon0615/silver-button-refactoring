package com.korit.silverbutton.dto.emergencyContact.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmergencyContactRequestDto {
    private String name;        // 연락처 이름

    private String relation;    // 연락처와의 관계

    private String phone;       // 연락처 전화번호

    private String address;     // 연락처 주소 (선택사항)
}
