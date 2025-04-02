package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.SleepRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.w3c.dom.ls.LSInput;

import java.util.List;

@Repository
public interface SleepRecordRepository extends JpaRepository<SleepRecord, Long> {
    @Query(value = "SELECT * FROM sleep_records WHERE user_id = :userId ORDER BY sleep_date DESC", nativeQuery = true)
    List<SleepRecord> getSleepRecordByUserId(Long userId);

    void deleteSleepRecordById(Long id);

}
