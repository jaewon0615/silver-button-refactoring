package com.korit.silverbutton.dto.mealRecord.response;


import com.korit.silverbutton.entity.MealRecord;
import com.korit.silverbutton.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MealRecordResponseDto {
    private Long id;

    private User user;

    private LocalDateTime mealDate;

    private String mealTime;

    private String FoodItems;

    private int calories;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public MealRecordResponseDto(MealRecord mealRecord) {
        this.id = mealRecord.getId();
        this.user = mealRecord.getUser();
        this.mealDate = mealRecord.getMealDate();
        this.mealTime = mealRecord.getMealTime();
        this.FoodItems = mealRecord.getFoodItems();
        this.calories = mealRecord.getCalories();
        this.createdAt = mealRecord.getCreatedAt();
        this.updatedAt = mealRecord.getUpdatedAt();
    }
}
