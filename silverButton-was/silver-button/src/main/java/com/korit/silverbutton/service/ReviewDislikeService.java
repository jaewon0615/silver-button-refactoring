package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.reviewDislike.request.ReviewDislikeRequestDto;
import com.korit.silverbutton.dto.reviewDislike.response.ReviewDislikeResponseDto;

public interface ReviewDislikeService {
    ResponseDto<ReviewDislikeResponseDto> postReviewDislike(Long userId, ReviewDislikeRequestDto dto);
}
