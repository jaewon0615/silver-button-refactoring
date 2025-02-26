package com.korit.silverbutton.dto.schedule.response;

import lombok.*;

@Data
@AllArgsConstructor
public class ScheduleResponseDto {
    private Long id;

    private String scheduleDate;

    private String task;
}
