package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.HealthRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HealthRecordRepository extends JpaRepository<HealthRecord, Long> {
    Optional<HealthRecord> getHealthRecordById(Long id);
    List<HealthRecord> findByUserId(Long userId);

}
