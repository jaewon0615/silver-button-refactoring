package com.korit.silverbutton.dto.exercise.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExerciseRequestDto {
    private String exerciseType;

    private int duration;

    private int caloriesBurned;

    private int intensity;

    private Date exerciseDate;

    private String location;

    private String notes;

    private int heart;

    private BigDecimal weight;


}
