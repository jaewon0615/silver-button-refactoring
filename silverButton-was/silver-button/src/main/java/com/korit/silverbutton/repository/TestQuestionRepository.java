package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.TestQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestQuestionRepository extends JpaRepository<TestQuestion, Long> {
}
