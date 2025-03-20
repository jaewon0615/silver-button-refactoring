package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.testQuestion.request.TestQuestionRequestDto;
import com.korit.silverbutton.dto.testQuestion.response.TestQuestionResponseDto;

public interface TestQuestionService {
    ResponseDto<TestQuestionResponseDto> postTestQuestion(TestQuestionRequestDto dto);
}
