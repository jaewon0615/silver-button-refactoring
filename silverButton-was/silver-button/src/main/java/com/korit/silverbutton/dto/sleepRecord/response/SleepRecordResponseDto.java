package com.korit.silverbutton.dto.sleepRecord.response;

import com.korit.silverbutton.entity.SleepRecord;
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
public class SleepRecordResponseDto {
    private Long id;

    private Long userId;

    private Date sleepDate;

    private int sleepTime;

    private int wakeTime;

    private int sleepDuration;

    private int sleepQuality;

    private int sleepInterruptionCount;

    private String notes;

    private String dreamOccurred;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public SleepRecordResponseDto(SleepRecord sleepRecord) {
        this.id = sleepRecord.getId();
        this.userId = sleepRecord.getUser().getId();
        this.sleepDate = sleepRecord.getSleepDate();
        this.sleepTime = sleepRecord.getSleepTime();
        this.wakeTime = sleepRecord.getWakeTime();
        this.sleepDuration = sleepRecord.getSleepDuration();
        this.sleepQuality = sleepRecord.getSleepQuality();
        this.sleepInterruptionCount = sleepRecord.getSleepInterruptionCount();
        this.notes = sleepRecord.getNotes();
        this.dreamOccurred = sleepRecord.getDreamOccurred();
        this.createdAt = sleepRecord.getCreatedAt();
        this.updatedAt = sleepRecord.getUpdatedAt();
    }
}
