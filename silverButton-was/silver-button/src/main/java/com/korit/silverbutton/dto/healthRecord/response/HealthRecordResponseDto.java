package com.korit.silverbutton.dto.healthRecord.response;

import com.korit.silverbutton.entity.HealthRecord;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HealthRecordResponseDto {
    private Long id;  // 기록 ID
    private Long userId;  // 사용자 ID
    private LocalDate recordDate;  // 기록 날짜

    private Integer bloodPressureSystolic;  // 수축기 혈압
    private Integer bloodPressureDiastolic; // 이완기 혈압
    private Integer bloodSugar;  // 혈당
    private BigDecimal weight;  // 체중

    private String notes;  // 추가 메모

    private LocalDateTime createdAt;  // 생성 시간
    private LocalDateTime updatedAt;  // 수정 시간

    public HealthRecordResponseDto(HealthRecord healthRecord) {
        this.id = healthRecord.getId();
        this.userId = healthRecord.getUser().getId();
        this.recordDate = healthRecord.getRecordDate();
        this.bloodPressureSystolic = healthRecord.getBloodPressureSystolic();
        this.bloodPressureDiastolic = healthRecord.getBloodPressureDiastolic();
        this.bloodSugar = healthRecord.getBloodSugar();
        this.weight = healthRecord.getWeight();
        this.notes = healthRecord.getNotes();
        this.createdAt = healthRecord.getCreatedAt();
        this.updatedAt = healthRecord.getUpdatedAt();
    }
}
