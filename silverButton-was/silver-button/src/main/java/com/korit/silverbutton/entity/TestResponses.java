package com.korit.silverbutton.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.aspectj.weaver.patterns.TypePatternQuestions;

import java.time.LocalDateTime;

@Entity
@Table(name = "test_responses")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class TestResponses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JoinColumn(name = "question_id",nullable = false)
    private Long questionId;

    private int response;

    private LocalDateTime createdAt;










}
