package com.korit.silverbutton.dto.review.response;

import com.korit.silverbutton.entity.Destination;
import com.korit.silverbutton.entity.Review;
import com.korit.silverbutton.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewResponseDto {
    private Long id;

    private Long userId;

    private Long destinationId;

    private BigDecimal rating;

    private String reviewText;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private String name;

    private String nickname;

    private Integer likeCount;

    private Integer dislikeCount;


    public ReviewResponseDto(Review review) {
        this.id = review.getId();
        this.userId = review.getUser().getId();
        this.destinationId = review.getDestination().getId();
        this.rating = review.getRating();
        this.reviewText = review.getReviewText();
        this.createdAt = review.getCreatedAt();
        this.updatedAt = review.getUpdatedAt();
        this.name = review.getDestination().getName();
        this.nickname = review.getUser().getNickname();
        this.likeCount = review.getLikeCount();
        this.dislikeCount = review.getDislikeCount();
    }
}
