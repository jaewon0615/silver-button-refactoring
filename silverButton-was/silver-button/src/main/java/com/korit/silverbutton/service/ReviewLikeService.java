package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.reviewLike.request.ReviewLikeRequestDto;
import com.korit.silverbutton.dto.reviewLike.response.ReviewLikeResponseDto;

import javax.annotation.Resource;

public interface ReviewLikeService {
    ResponseDto<ReviewLikeResponseDto> postReviewLike(Long userId, ReviewLikeRequestDto dto);

}
