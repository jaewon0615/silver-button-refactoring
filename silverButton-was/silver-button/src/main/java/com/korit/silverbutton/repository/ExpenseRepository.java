package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    @Query(value = "SELECT * FROM expense WHERE user_id = :userId ORDER BY created_at DESC", nativeQuery = true)
    List<Expense> getExpenseByUserId(Long userId);

    void deleteExpenseById(Long id);
}
