package com.korit.silverbutton.dto.diary.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DiaryRequestDto {
    private String title;         // 일기 제목

    private String content;       // 일기 내용

    private String weather;       // 날씨

    private String mood;          // 감정 상태
}
