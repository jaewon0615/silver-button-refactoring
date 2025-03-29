package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.reviewLike.request.ReviewLikeRequestDto;
import com.korit.silverbutton.dto.reviewLike.response.ReviewLikeResponseDto;
import com.korit.silverbutton.entity.Review;
import com.korit.silverbutton.entity.ReviewLike;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.ReviewLikeRepository;
import com.korit.silverbutton.repository.ReviewRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.ReviewLikeService;
import com.korit.silverbutton.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
public class ReviewLikeServiceImpl implements ReviewLikeService {
    private final ReviewLikeRepository reviewLikeRepository;
    private final UserRepository userRepository;
    private final ReviewRepository reviewRepository;

    @Override
    public ResponseDto<ReviewLikeResponseDto> postReviewLike(Long userId, ReviewLikeRequestDto dto) {
        try {
            User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
            Review review = reviewRepository.findById(dto.getReviewId()).orElseThrow(() -> new IllegalArgumentException("Review not found"));

            // 이미 좋아요를 눌렀는지 체크
            boolean alreadyLiked = reviewLikeRepository.existsByUserAndReview(user, review);
            if (alreadyLiked) {
                return ResponseDto.setFailed(ResponseMessage.ALREADY_LIKED); // 이미 좋아요를 눌렀다는 메시지
            }

            // 좋아요를 눌렀으면 ReviewLike 저장
            ReviewLike reviewLike = ReviewLike.builder()
                    .user(user)
                    .review(review)
                    .createdAt(LocalDateTime.now())
                    .build();
            reviewLikeRepository.save(reviewLike);

            // 리뷰의 좋아요 수 증가
            review.incrementLikeCount();
            reviewRepository.save(review); // 좋아요 수를 저장

            ReviewLikeResponseDto data = new ReviewLikeResponseDto(reviewLike);
            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }


}
