package com.korit.silverbutton.service.implement;


import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.review.request.ReviewRequestDto;
import com.korit.silverbutton.dto.review.response.ReviewResponseDto;
import com.korit.silverbutton.entity.Destination;
import com.korit.silverbutton.entity.Review;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.DestinationRepository;
import com.korit.silverbutton.repository.ReviewRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.ReviewService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final DestinationRepository destinationRepository;
    private final UserRepository userRepository;

    @Override
    public ResponseDto<ReviewResponseDto> postReview(Long userId,Long destinationId,ReviewRequestDto dto) {
        ReviewResponseDto data = null;
        LocalDate date = LocalDate.now();
        BigDecimal rating = dto.getRating();
        String reviewText = dto.getReviewText();
        try {
            User user = userRepository.findById(userId).orElse(null);
            Destination destination = destinationRepository.findById(dto.getDestinationId()).orElse(null);

            Review review = Review.builder()
                    .user(user)
                    .destination(destination)
                    .rating(rating)
                    .reviewText(reviewText)
                    .createdAt(date.atStartOfDay())
                    .build();
            reviewRepository.save(review);
            data = new ReviewResponseDto(review);
        } catch (Exception e){
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<ReviewResponseDto>> getReviewByUserId(Long userId) {
        List<ReviewResponseDto> data = null;
        try {
            List<Review> reviews = reviewRepository.getReviewByUserId(userId);
            if (reviews.isEmpty()){
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = reviews.stream().map(ReviewResponseDto::new).collect(Collectors.toList());
        } catch (Exception e){
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<ReviewResponseDto>> getReviewByDestinationId(Long destinationId) {
        List<ReviewResponseDto> data = null;
        try {
            List<Review> reviews = reviewRepository.getReviewByDestinationId(destinationId);
            if (reviews.isEmpty()){
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = reviews.stream().map(ReviewResponseDto::new).collect(Collectors.toList());
        } catch (Exception e){
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }
}
