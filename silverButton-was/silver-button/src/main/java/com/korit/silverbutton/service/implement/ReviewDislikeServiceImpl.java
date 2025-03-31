package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.reviewDislike.request.ReviewDislikeRequestDto;
import com.korit.silverbutton.dto.reviewDislike.response.ReviewDislikeResponseDto;
import com.korit.silverbutton.entity.Review;
import com.korit.silverbutton.entity.ReviewDisLike;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.ReviewDislikeRepository;
import com.korit.silverbutton.repository.ReviewRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.ReviewDislikeService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Transactional
public class ReviewDislikeServiceImpl implements ReviewDislikeService {
    private final ReviewDislikeRepository reviewDislikeRepository;
    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;


    @Override
    public ResponseDto<ReviewDislikeResponseDto> postReviewDislike(Long userId, ReviewDislikeRequestDto dto) {
        try {
            User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
            Review review = reviewRepository.findById(dto.getReviewId()).orElseThrow(() -> new IllegalArgumentException("Review not found"));

            boolean alreadyLiked = reviewDislikeRepository.existsByUserAndReview(user, review);
            if (alreadyLiked) {
                return ResponseDto.setFailed(ResponseMessage.ALREADY_LIKED); // 이미 좋아요를 눌렀다는 메시지
            }
            ReviewDisLike reviewDisLike = ReviewDisLike.builder()
                    .user(user)
                    .review(review)
                    .createdAt(LocalDateTime.now())
                    .build();
            reviewDislikeRepository.save(reviewDisLike);

            review.incrementDisLikeCount();
            reviewRepository.save(review); // 좋아요 수를 저장

            ReviewDislikeResponseDto data = new ReviewDislikeResponseDto(reviewDisLike);
            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
        } catch (Exception e){
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }
}
