package com.korit.silverbutton.dto.reviewDislike.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDislikeRequestDto {
    @NotNull
    private Long reviewId;

    @NotNull
    private Long userId; // 사용자 ID
}
