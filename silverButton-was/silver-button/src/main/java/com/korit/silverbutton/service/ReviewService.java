package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.review.request.ReviewRequestDto;
import com.korit.silverbutton.dto.review.response.ReviewResponseDto;
import com.korit.silverbutton.entity.Destination;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    ResponseDto<ReviewResponseDto> postReview(Long userId,Long destinationId,ReviewRequestDto dto);

    ResponseDto<List<ReviewResponseDto>> getReviewByUserId(Long userId);

    ResponseDto<List<ReviewResponseDto>> getReviewByDestinationId(Long destinationId);


    ResponseDto<Boolean> deleteReviewById(Long id);


}
