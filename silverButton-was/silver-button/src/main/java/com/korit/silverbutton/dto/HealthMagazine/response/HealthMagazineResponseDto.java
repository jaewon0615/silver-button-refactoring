package com.korit.silverbutton.dto.healthMagazine.response;

import com.korit.silverbutton.entity.HealthMagazine;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HealthMagazineResponseDto {

    private Long id;

    private String thumbnailImageUrl;

    private String title;

    private String content;

    private LocalDateTime publishedDate;

    private String source;

    private int viewCount;


    public HealthMagazineResponseDto(HealthMagazine healthMagazine) {
        this.id = healthMagazine.getId();
        this.thumbnailImageUrl = healthMagazine.getThumbnailImageUrl();
        this.title = healthMagazine.getTitle();
        this.content = healthMagazine.getContent();
        this.publishedDate = healthMagazine.getPublishedDate();
        this.source = healthMagazine.getSource();
        this.viewCount = healthMagazine.getViewCount();
    }


}
