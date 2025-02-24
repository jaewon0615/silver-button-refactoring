package com.korit.silverbutton.controller;


import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.Schedule.Request.ScheduleCreateRequestDto;
import com.korit.silverbutton.dto.Schedule.Response.ScheduleCreateResponseDto;
import com.korit.silverbutton.dto.Schedule.Response.ScheduleResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.ScheduleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/schedule")
@RequiredArgsConstructor
public class ScheduleController {
    private final ScheduleService scheduleservice;

    @GetMapping("/search")
    private ResponseEntity<ResponseDto<List<ScheduleResponseDto>>> findSchedulesByDependentIdAndDate
            (@RequestParam int year, @RequestParam int month, @AuthenticationPrincipal PrincipalUser principalUser){
        ResponseDto<List<ScheduleResponseDto>> result=
                scheduleservice.getScheduleByDependentIdAndDate(principalUser.getUserId(), year, month);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PostMapping("/create")
    private ResponseEntity<ResponseDto<ScheduleCreateResponseDto>> createSchedule(
            @Valid @RequestBody ScheduleCreateRequestDto dto, @AuthenticationPrincipal PrincipalUser principalUser){
        ResponseDto<ScheduleCreateResponseDto> result= scheduleservice.createScheduleSelf(dto, principalUser.getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @PostMapping("/dependent-create")
    private ResponseEntity<ResponseDto<ScheduleCreateResponseDto>> createdependentSchedule(
            @Valid @RequestBody ScheduleCreateRequestDto dto, @AuthenticationPrincipal PrincipalUser principalUser){

        ResponseDto<ScheduleCreateResponseDto> result= scheduleservice.createScheduleDependent(dto, principalUser.getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @PutMapping("/update/{id}")
    private ResponseEntity<ResponseDto<ScheduleCreateResponseDto>> updateSchedule(
            @PathVariable Long id, @Valid @RequestBody ScheduleCreateRequestDto dto, @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<ScheduleCreateResponseDto> result= scheduleservice.updateSchedule(id, dto, principalUser.getId());
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseDto<Void>> deleteSchedule(@PathVariable Long id, @AuthenticationPrincipal PrincipalUser principalUser){
        ResponseDto<Void> result = scheduleservice.deleteSchedule(id, principalUser.getId());
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/today")
    public ResponseEntity<ResponseDto<List<ScheduleResponseDto>>> getTodaySchedules(@AuthenticationPrincipal PrincipalUser principalUser) {
        ResponseDto<List<ScheduleResponseDto>> result = scheduleservice.getScheduleForToday(principalUser.getUserId());
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
