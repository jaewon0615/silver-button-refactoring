package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.healthRecord.requset.HealthRecordRequestDto;
import com.korit.silverbutton.dto.healthRecord.response.HealthRecordResponseDto;

import java.util.List;

public interface HealthRecordService {
    ResponseDto<HealthRecordResponseDto> postHealthRecord(Long id, HealthRecordRequestDto dto);
    ResponseDto<HealthRecordResponseDto> updateHealthRecord(Long id, Long recordId, HealthRecordRequestDto dto);
    ResponseDto<HealthRecordResponseDto> getHealthRecordById(Long id);
    List<HealthRecordResponseDto> getHealthRecordsByUserId(Long userId);
}
