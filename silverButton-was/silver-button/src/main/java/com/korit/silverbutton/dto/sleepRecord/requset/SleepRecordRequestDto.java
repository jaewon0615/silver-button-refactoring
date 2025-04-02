package com.korit.silverbutton.dto.sleepRecord.requset;

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
public class SleepRecordRequestDto {
    private Date sleepDate;

    private int sleepTime;

    private int wakeTime;

    private int sleepDuration;

    private int sleepQuality;

    private int sleepInterruptionCount;

    private String notes;

    private String dreamOccurred;
}
