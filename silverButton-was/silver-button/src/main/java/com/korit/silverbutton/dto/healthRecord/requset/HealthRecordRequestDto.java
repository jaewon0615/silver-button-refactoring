package com.korit.silverbutton.dto.healthRecord.requset;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HealthRecordRequestDto {
    private Long id;
    @NotNull
    private LocalDate recordDate;  // 기록 날짜 (필수)

    private Integer bloodPressureSystolic;  // 수축기 혈압 (선택)
    private Integer bloodPressureDiastolic; // 이완기 혈압 (선택)
    private Integer bloodSugar;  // 혈당 (선택)
    private BigDecimal weight;  // 체중 (소수점 저장)
    private BigDecimal height;

    private String notes;  // 추가 메모 (선택)
}
