package com.korit.silverbutton.dto.mealRecord.request;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MealRecordRequestDto {
    @NotBlank
    private String mealTime;

    @NotBlank
    private String foodItems;

    private int calories;
}
