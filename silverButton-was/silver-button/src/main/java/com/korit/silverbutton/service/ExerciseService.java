package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.exercise.request.ExerciseRequestDto;
import com.korit.silverbutton.dto.exercise.response.ExerciseResponseDto;
import org.apache.coyote.Response;

import java.util.List;

public interface ExerciseService {
    ResponseDto<ExerciseResponseDto> postExercise(Long userId, ExerciseRequestDto dto);
    ResponseDto<List<ExerciseResponseDto>> getExercisesByUserId(Long userId);
    ResponseDto<Boolean> deleteExerciseById(Long id);


}
