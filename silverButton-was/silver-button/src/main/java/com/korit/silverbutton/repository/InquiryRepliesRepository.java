package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.InquiryReplies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InquiryRepliesRepository extends JpaRepository<InquiryReplies, Long> {
    void deleteInquiryRepliesById(Long id);

    @Query(value = "SELECT * FROM inquiry_replies WHERE inquiry_id = :inquiryId ORDER BY created_at DESC", nativeQuery = true)
    List<InquiryReplies> getInquiryRepliesByInquiryId (@Param("inquiryId") Long inquiryId);
}
