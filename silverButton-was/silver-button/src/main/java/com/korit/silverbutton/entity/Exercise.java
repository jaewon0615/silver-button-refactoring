package com.korit.silverbutton.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "exercise")
@Builder
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

    private String exerciseType;

    private int duration;

    private int caloriesBurned;

    private String intensity;

    private Date exerciseDate;

    private String location;

    private String notes;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
