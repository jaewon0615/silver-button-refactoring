package com.korit.silverbutton.entity;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "reviews")
@Builder
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "destination_id")
    private Destination destination;

    private BigDecimal rating;

    private String reviewText;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private Integer likeCount;

    private Integer dislikeCount;

    public void incrementLikeCount() {
        if (this.likeCount == null) {
            this.likeCount = 0;
        }
        this.likeCount++;
    }

    public void incrementDisLikeCount() {
        if (this.dislikeCount == null) {
            this.dislikeCount = 0;
        }
        this.dislikeCount++;
    }

}
