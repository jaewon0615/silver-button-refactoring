package com.korit.silverbutton.dto.reviewDislike.response;

import com.korit.silverbutton.entity.ReviewDisLike;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDislikeResponseDto {
    private Long reviewId;

    private Long userId;


    private LocalDateTime createdAt;

    public ReviewDislikeResponseDto(ReviewDisLike reviewDisLike) {
        this.reviewId = reviewDisLike.getReview().getId();
        this.userId = reviewDisLike.getUser().getId();
        this.createdAt = reviewDisLike.getCreatedAt();
    }
}
