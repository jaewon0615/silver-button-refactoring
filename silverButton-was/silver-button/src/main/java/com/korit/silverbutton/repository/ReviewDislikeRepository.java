package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.Review;
import com.korit.silverbutton.entity.ReviewDisLike;
import com.korit.silverbutton.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public interface ReviewDislikeRepository extends JpaRepository<ReviewDisLike,Long> {

    boolean existsByUserAndReview(User user, Review review);
}
