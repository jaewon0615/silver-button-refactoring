package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.MealRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealRecordRepository extends JpaRepository<MealRecord, Long> {
    @Query(value = "SELECT * FROM meal_record WHERE user_id = :userId ORDER BY created_at DESC", nativeQuery = true)
    List<MealRecord> getMealRecordByUserId(Long userId);

    void deleteMealRecordById(Long id);
}
