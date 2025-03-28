package com.korit.silverbutton.controller;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.review.request.ReviewRequestDto;
import com.korit.silverbutton.dto.review.response.ReviewResponseDto;
import com.korit.silverbutton.entity.Review;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.DIARY;
import static com.korit.silverbutton.common.constant.ApiMappingPattern.REVIEW;

@RestController
@RequestMapping(REVIEW)
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;

    private static final String REVIEW_POST = "/{destinationId}";
    private static final String REVIEW_GET = "/{userId}";
    private static final String REVIEW_GET_DESTINATION = "destinationId/{destinationId}";
    private static final String REVIEW_DELETE = "/{id}";

    @PostMapping(REVIEW_POST)
    public ResponseEntity<ResponseDto<ReviewResponseDto>> postReview(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @PathVariable Long destinationId,
            @RequestBody ReviewRequestDto dto
            ){
        ResponseDto<ReviewResponseDto> response = reviewService.postReview(principalUser.getId(),destinationId,dto);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(REVIEW_GET)
    public ResponseEntity<ResponseDto<List<ReviewResponseDto>>> getReviewByUserId(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<List<ReviewResponseDto>> response = reviewService.getReviewByUserId(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(REVIEW_GET_DESTINATION)
    public ResponseEntity<ResponseDto<List<ReviewResponseDto>>> getReviewByDestinationId(
           @PathVariable Long destinationId
    ){
        ResponseDto<List<ReviewResponseDto>> response = reviewService.getReviewByDestinationId(destinationId);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(REVIEW_DELETE)
    public ResponseEntity<ResponseDto<Boolean>> deleteReviewById(
            @PathVariable Long id
    ){
        ResponseDto<Boolean> response = reviewService.deleteReviewById(id);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }




}
