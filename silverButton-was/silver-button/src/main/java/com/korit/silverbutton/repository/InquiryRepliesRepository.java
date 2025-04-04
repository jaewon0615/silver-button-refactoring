package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.InquiryReplies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InquiryRepliesRepository extends JpaRepository<InquiryReplies, Long> {
    void deleteInquiryRepliesById(Long id);
}
