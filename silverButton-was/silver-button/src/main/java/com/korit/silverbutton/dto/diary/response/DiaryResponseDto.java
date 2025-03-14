package com.korit.silverbutton.dto.diary.response;

import com.korit.silverbutton.entity.Diary;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DiaryResponseDto {
    private Long id;              // 일기 ID

    private Long userId;            // 작성자 정보 (User 객체)

    private String title;         // 일기 제목

    private String content;       // 일기 내용

    private String weather;       // 날씨

    private String mood;          // 감정 상태

    private LocalDateTime createdAt; // 작성일시

    private LocalDateTime updatedAt; // 수정일시

    public DiaryResponseDto(Diary diary) {
        this.id = diary.getId();
        this.userId = diary.getUser().getId();
        this.title = diary.getTitle();
        this.content = diary.getContent();
        this.weather = diary.getWeather();
        this.mood = diary.getMood();
        this.createdAt = diary.getCreatedAt();
        this.updatedAt = diary.getUpdatedAt();
    }
}
