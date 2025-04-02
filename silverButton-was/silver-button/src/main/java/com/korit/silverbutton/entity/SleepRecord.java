package com.korit.silverbutton.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "sleep_records")
@Builder
public class SleepRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

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
}
