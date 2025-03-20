package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.testQuestion.request.TestQuestionRequestDto;
import com.korit.silverbutton.dto.testQuestion.response.TestQuestionResponseDto;
import com.korit.silverbutton.entity.TestQuestion;
import com.korit.silverbutton.repository.TestQuestionRepository;
import com.korit.silverbutton.service.TestQuestionService;
import jakarta.persistence.Id;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
@RequiredArgsConstructor
public class TestQuestionServiceImpl implements TestQuestionService {

    private final TestQuestionRepository testQuestionRepository;

    @Override
    public ResponseDto<TestQuestionResponseDto> postTestQuestion(TestQuestionRequestDto dto) {
        TestQuestionResponseDto data = null;
        LocalDate localDate = LocalDate.now();
        String questionText = dto.getQuestionText();
        try {
            TestQuestion testQuestion = TestQuestion.builder()
                    .createdAt(localDate.atStartOfDay())
                    .questionText(questionText)
                    .build();
            testQuestionRepository.save(testQuestion);
            data = new TestQuestionResponseDto(testQuestion);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }
}
