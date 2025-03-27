package com.korit.silverbutton.dto.review.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewRequestDto {
    private BigDecimal rating;

    private String reviewText;

    private Long destinationId;

}
