package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, Long> {
    @Query(value = "SELECT * FROM diary ORDER BY created_at DESC",nativeQuery = true)
    List<Diary> getDiaryByUserId(Long userId);

    Optional<Diary> getDiaryById(Long id);

    void deleteDiaryById(Long id);

}
