package com.korit.silverbutton.dto;

import com.korit.silverbutton.dto.healthRecord.response.HealthRecordResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor(staticName= "set")
public class ResponseDto<D> {

    private boolean result;
    private String message;
    private D data;

    // 성공적인 응답을 반환하는 메소드
    public static <D> ResponseDto<D> setSuccess(String message, D data){
        return ResponseDto.set(true, message, data);
    }

    // 실패한 응답을 반환하는 메소드
    public static <D> ResponseDto<D> setFailed(String message){
        return ResponseDto.set(false, message, null);
    }

    // HealthRecordResponseDto 리스트를 반환하는 메소드
    public static ResponseDto<List<HealthRecordResponseDto>> setSuccess(List<HealthRecordResponseDto> healthRecords) {
        return new ResponseDto<>(true, "Success", healthRecords);
    }

    public void setHealthRecords(List<HealthRecordResponseDto> healthRecords) {
        this.data = (D) healthRecords;  // data 필드는 제네릭이므로 강제로 타입을 맞춰줍니다.
    }
}
