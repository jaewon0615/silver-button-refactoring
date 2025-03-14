package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.diary.request.DiaryRequestDto;
import com.korit.silverbutton.dto.diary.response.DiaryResponseDto;

import java.util.List;

public interface DiaryService {
    ResponseDto<DiaryResponseDto> postDiary(Long userId, DiaryRequestDto dto);
    ResponseDto<List<DiaryResponseDto>> getDiaryByUserId(Long userId);
    ResponseDto<DiaryResponseDto> getDiaryById(Long id);
    ResponseDto<Boolean> deleteDiaryById(Long id);


}
