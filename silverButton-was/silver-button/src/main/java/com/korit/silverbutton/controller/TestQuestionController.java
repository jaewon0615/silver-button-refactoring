package com.korit.silverbutton.controller;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.testQuestion.request.TestQuestionRequestDto;
import com.korit.silverbutton.dto.testQuestion.response.TestQuestionResponseDto;
import com.korit.silverbutton.service.TestQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.DIARY;
import static com.korit.silverbutton.common.constant.ApiMappingPattern.TEST_QUESTION;

@RestController
@RequestMapping(TEST_QUESTION)
@RequiredArgsConstructor
public class TestQuestionController {
    private static final String TEST_QUESTION_POST = "/";

    private final TestQuestionService testQuestionService;

    @PostMapping(TEST_QUESTION_POST)
    public ResponseEntity<ResponseDto<TestQuestionResponseDto>> postTestQuestion(
            @RequestBody TestQuestionRequestDto dto
    ){
        ResponseDto<TestQuestionResponseDto> response = testQuestionService.postTestQuestion(dto);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }


}
