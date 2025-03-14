package com.korit.silverbutton.dto.emergencyContact.response;

import com.korit.silverbutton.entity.EmergencyContact;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmergencyContactResponseDto {
    private Long id;            // 긴급 연락처 ID

    private Long userId;        // 사용자 ID

    private String name;        // 연락처 이름

    private String relation;    // 연락처와의 관계

    private String phone;       // 연락처 전화번호

    private String address;     // 연락처 주소

    private String memo;

    private LocalDateTime createdAt;  // 연락처 생성일

    private LocalDateTime updatedAt;  // 연락처 수정일

    public EmergencyContactResponseDto(EmergencyContact emergencyContact) {
        this.id = emergencyContact.getId();
        this.userId = emergencyContact.getUser().getId();
        this.name = emergencyContact.getName();
        this.relation = emergencyContact.getRelation();
        this.phone = emergencyContact.getPhone();
        this.address = emergencyContact.getAddress();
        this.createdAt = emergencyContact.getCreatedAt();
        this.updatedAt = emergencyContact.getUpdatedAt();
        this.memo = emergencyContact.getMemo();
    }
}
