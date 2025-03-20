package com.korit.silverbutton.dto.testQuestion.response;

import com.korit.silverbutton.entity.TestQuestion;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TestQuestionResponseDto {
    private Long id;

    private String questionText;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public TestQuestionResponseDto(TestQuestion testQuestion) {
        this.id = testQuestion.getId();
        this.questionText = testQuestion.getQuestionText();
        this.createdAt = testQuestion.getCreatedAt();
        this.updatedAt = testQuestion.getUpdatedAt();
    }
}
