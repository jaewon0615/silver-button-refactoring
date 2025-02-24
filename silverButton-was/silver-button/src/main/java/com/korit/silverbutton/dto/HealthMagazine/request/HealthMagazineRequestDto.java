package com.korit.silverbutton.dto.HealthMagazine.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HealthMagazineRequestDto {
    private Long id;


    private String thumbnailImageUrl;


    private String title;


    private String content;


    private String source;


    private LocalDateTime publishedDate;


    private int viewCount;

}
