package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.reviewLike.request.ReviewLikeRequestDto;
import com.korit.silverbutton.dto.reviewLike.response.ReviewLikeResponseDto;
import com.korit.silverbutton.entity.Review;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.ReviewLikeRepository;
import com.korit.silverbutton.repository.ReviewRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.ReviewLikeService;
import com.korit.silverbutton.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
public class ReviewLikeServiceImpl implements ReviewLikeService {
    private final ReviewLikeRepository reviewLikeRepository;
    private final UserRepository userRepository;
    private final ReviewRepository reviewRepository;

    @Override
    public ResponseDto<ReviewLikeResponseDto> postReviewLike(Long userId, Long reviewId, ReviewLikeRequestDto dto) {
        return null;

    }
}
