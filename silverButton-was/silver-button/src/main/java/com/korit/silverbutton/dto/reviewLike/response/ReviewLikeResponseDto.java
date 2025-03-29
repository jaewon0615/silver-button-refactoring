package com.korit.silverbutton.dto.reviewLike.response;

import com.korit.silverbutton.entity.ReviewLike;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewLikeResponseDto {
    private Long reviewId;

    private Long userId;


    private LocalDateTime createdAt;

    public ReviewLikeResponseDto(ReviewLike reviewLike) {
        this.reviewId = reviewLike.getReview().getId();
        this.createdAt = reviewLike.getCreatedAt();
        this.userId = reviewLike.getUser().getId();
    }
}
