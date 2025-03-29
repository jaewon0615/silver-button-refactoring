package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.Review;
import com.korit.silverbutton.entity.ReviewLike;
import com.korit.silverbutton.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewLikeRepository extends JpaRepository<ReviewLike, Long> {
    boolean existsByUserAndReview(User user, Review review);
}
