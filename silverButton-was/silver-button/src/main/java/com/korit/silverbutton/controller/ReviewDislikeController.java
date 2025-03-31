package com.korit.silverbutton.controller;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.reviewDislike.request.ReviewDislikeRequestDto;
import com.korit.silverbutton.dto.reviewDislike.response.ReviewDislikeResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.ReviewDislikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.REVIEW_DISLIKE;
import static com.korit.silverbutton.common.constant.ApiMappingPattern.REVIEW_LIKE;

@RestController
@RequestMapping(REVIEW_DISLIKE)
@RequiredArgsConstructor
public class ReviewDislikeController {
    private final ReviewDislikeService reviewDislikeService;

    private static final String REVIEW_DISLIKE_POST = "/";

    @PostMapping(REVIEW_DISLIKE_POST)
    private ResponseEntity<ResponseDto<ReviewDislikeResponseDto>> postReviewDislike(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody ReviewDislikeRequestDto dto
    ) {
        ResponseDto<ReviewDislikeResponseDto> response = reviewDislikeService.postReviewDislike(principalUser.getId(),dto);
        HttpStatus status =  response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }


}
