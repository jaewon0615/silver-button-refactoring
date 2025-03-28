package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query(value = "SELECT * FROM reviews  WHERE user_id = :userId ORDER BY created_at DESC", nativeQuery = true)
    List<Review> getReviewByUserId (@Param("userId") Long userId);

    @Query(value = "SELECT * FROM reviews WHERE destination_id = :destinationId ORDER BY created_at DESC", nativeQuery = true)
    List<Review> getReviewByDestinationId (@Param("destinationId") Long destinationId);

    void deleteReviewById(Long id);


}
