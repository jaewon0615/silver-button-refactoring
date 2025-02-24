package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.Schedules;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleCreateRepository extends JpaRepository<Schedules, Long> {

    void deleteByIdAndDependentId(Long id, Long dependentId);

    boolean existsByIdAndDependentId(Long id, Long dependentId);

    Schedules findByIdAndDependentId(Long id, Long dependentId);
}
