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

    @Query(value = "SELECT * FROM health_record ORDER BY created_at DESC",nativeQuery = true)
    List<HealthRecord> getHealthRecordsByUserId(Long userId);

    void deleteHealthRecordById(Long id);

    @Query(value = "SELECT * FROM health_record ORDER BY created_at DESC",nativeQuery = true)
    List<HealthRecord> getLatestHealthRecordByUserId(Long userId);





}
