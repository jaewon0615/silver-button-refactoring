package com.korit.silverbutton.repository;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.healthRecord.response.HealthRecordResponseDto;
import com.korit.silverbutton.entity.HealthRecord;
import org.apache.coyote.Response;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HealthRecordRepository extends JpaRepository<HealthRecord, Long> {
    Optional<HealthRecord> getHealthRecordById(Long id);
    @Query("SELECT new com.korit.silverbutton.dto.healthRecord.response.HealthRecordResponseDto(h.id, h.date, h.details) FROM HealthRecord h WHERE h.user.id = :userId")
    List<HealthRecordResponseDto> findHealthRecordsByUserId(@Param("userId") Long userId);




}
