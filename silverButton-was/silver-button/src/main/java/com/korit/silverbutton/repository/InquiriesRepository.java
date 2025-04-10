package com.korit.silverbutton.repository;

import com.korit.silverbutton.dto.inquiries.request.InquiriesRequestDto;
import com.korit.silverbutton.entity.Inquiries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InquiriesRepository extends JpaRepository<Inquiries, Long> {
    Optional<Inquiries> getInquiriesById(Long id);

    @Query(value = "SELECT * FROM inquiries WHERE user_id = :userId ORDER BY created_at DESC", nativeQuery = true)
    List<Inquiries> getInquiriesByUserId(Long userId);

    @Query(value = "SELECT * FROM inquiries ORDER BY created_at DESC", nativeQuery = true)
    List<Inquiries> findAll();


    void deleteInquiriesById(Long id);

}
