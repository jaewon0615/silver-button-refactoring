package com.korit.silverbutton.dto.exercise.response;

import com.korit.silverbutton.entity.Exercise;
import com.korit.silverbutton.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExerciseResponseDto {
    private Long id;

    private Long userId;

    private String exerciseType;

    private int duration;

    private int caloriesBurned;

    private String intensity;

    private String location;

    private Date exerciseDate;

    private String notes;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public ExerciseResponseDto(Exercise exercise) {
        this.id = exercise.getId();
        this.userId = exercise.getUser().getId();
        this.exerciseType = exercise.getExerciseType();
        this.duration = exercise.getDuration();
        this.caloriesBurned = exercise.getCaloriesBurned();
        this.intensity = exercise.getIntensity();
        this.location = exercise.getLocation();
        this.exerciseDate = exercise.getExerciseDate();
        this.notes = exercise.getNotes();
        this.createdAt = exercise.getCreatedAt();
        this.updatedAt = exercise.getUpdatedAt();
    }
}
