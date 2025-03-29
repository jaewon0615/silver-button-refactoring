package com.korit.silverbutton.controller;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.reviewLike.request.ReviewLikeRequestDto;
import com.korit.silverbutton.dto.reviewLike.response.ReviewLikeResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.ReviewLikeService;
import com.korit.silverbutton.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.REVIEW;
import static com.korit.silverbutton.common.constant.ApiMappingPattern.REVIEW_LIKE;

@RestController
@RequestMapping(REVIEW_LIKE)
@RequiredArgsConstructor
public class ReviewLikeController {
    private final ReviewLikeService reviewLikeService;

    private static final String REVIEW_LIKE_POST = "/";

    @PostMapping(REVIEW_LIKE_POST)
    private ResponseEntity<ResponseDto<ReviewLikeResponseDto>> postReviewLike(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody ReviewLikeRequestDto dto
            ) {
        ResponseDto<ReviewLikeResponseDto> response = reviewLikeService.postReviewLike(principalUser.getId(),dto);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);

    }


}
