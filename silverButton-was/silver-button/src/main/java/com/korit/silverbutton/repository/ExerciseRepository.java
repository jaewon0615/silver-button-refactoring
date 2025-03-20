package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    @Query(value = "SELECT * FROM exercise WHERE user_id = :userId ORDER BY created_at DESC", nativeQuery = true)
    List<Exercise> getExercisesByUserId(Long userId);

    void deleteExerciseById(Long id);
}
