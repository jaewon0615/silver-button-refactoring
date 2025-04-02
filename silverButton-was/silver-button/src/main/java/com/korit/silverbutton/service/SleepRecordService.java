package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.sleepRecord.requset.SleepRecordRequestDto;
import com.korit.silverbutton.dto.sleepRecord.response.SleepRecordResponseDto;

import java.util.List;

public interface SleepRecordService {
    ResponseDto<SleepRecordResponseDto> postSleepRecord(Long userId, SleepRecordRequestDto dto);
    ResponseDto<List<SleepRecordResponseDto>> getSleepRecordByUserId(Long userId);
    ResponseDto<Boolean> deleteSleepRecordById(Long id);
}
