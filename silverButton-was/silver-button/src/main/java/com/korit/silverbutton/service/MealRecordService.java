package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.mealRecord.request.MealRecordRequestDto;
import com.korit.silverbutton.dto.mealRecord.response.MealRecordResponseDto;

import java.util.List;

public interface MealRecordService {
    ResponseDto<MealRecordResponseDto> postMealRecord(Long userId, MealRecordRequestDto dto);
    ResponseDto<List<MealRecordResponseDto>> getMealRecordByUserId(Long userId);
    ResponseDto<Boolean> deleteMealRecordById(Long id);
}
