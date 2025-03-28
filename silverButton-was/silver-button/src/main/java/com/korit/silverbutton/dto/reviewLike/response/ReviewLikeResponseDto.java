package com.korit.silverbutton.dto.reviewLike.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewLikeResponseDto {
    private Long reviewId;

    private int likeCount;

    private LocalDateTime createdAt;
}
