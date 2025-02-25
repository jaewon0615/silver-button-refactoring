package com.korit.silverbutton.controller;


import com.korit.silverbutton.common.constant.ApiMappingPattern;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.schedule.response.ScheduleCreateResponseDto;
import com.korit.silverbutton.dto.schedule.response.ScheduleResponseDto;
import com.korit.silverbutton.dto.schedule.request.ScheduleCreateRequestDto;


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
@RequestMapping(ApiMappingPattern.SCEHDULE)
@RequiredArgsConstructor
public class ScheduleController {

    private static final String SCHEDULE_GET = "/search";
    private static final String SCHEDULE_POST = "/create";
    private static final String SCHEDULE_DEPENDENT_POST = "/dependent-create";
    private static final String SCHEDULE_UPDATE = "/update/{id}";
    private static final String SCHEDULE_DELETE = "/delete/{id}";
    private static final String SCHEDULE_GET_TODAY = "/today";

    private final ScheduleService scheduleservice;

    @GetMapping(SCHEDULE_GET)
    private ResponseEntity<ResponseDto<List<ScheduleResponseDto>>> findSchedulesByDependentIdAndDate
            (@RequestParam int year, @RequestParam int month, @AuthenticationPrincipal PrincipalUser principalUser){
        ResponseDto<List<ScheduleResponseDto>> result=
                scheduleservice.getScheduleByDependentIdAndDate(principalUser.getUserId(), year, month);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PostMapping(SCHEDULE_POST)
    private ResponseEntity<ResponseDto<ScheduleCreateResponseDto>> createSchedule(
            @Valid @RequestBody ScheduleCreateRequestDto dto, @AuthenticationPrincipal PrincipalUser principalUser){
        ResponseDto<ScheduleCreateResponseDto> result= scheduleservice.createScheduleSelf(dto, principalUser.getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @PostMapping(SCHEDULE_DEPENDENT_POST)
    private ResponseEntity<ResponseDto<ScheduleCreateResponseDto>> createdependentSchedule(
            @Valid @RequestBody ScheduleCreateRequestDto dto, @AuthenticationPrincipal PrincipalUser principalUser){

        ResponseDto<ScheduleCreateResponseDto> result= scheduleservice.createScheduleDependent(dto, principalUser.getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @PutMapping(SCHEDULE_UPDATE)
    private ResponseEntity<ResponseDto<ScheduleCreateResponseDto>> updateSchedule(
            @PathVariable Long id, @Valid @RequestBody ScheduleCreateRequestDto dto, @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<ScheduleCreateResponseDto> result= scheduleservice.updateSchedule(id, dto, principalUser.getId());
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @DeleteMapping(SCHEDULE_DELETE)
    public ResponseEntity<ResponseDto<Void>> deleteSchedule(@PathVariable Long id, @AuthenticationPrincipal PrincipalUser principalUser){
        ResponseDto<Void> result = scheduleservice.deleteSchedule(id, principalUser.getId());
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping(SCHEDULE_GET_TODAY)
    public ResponseEntity<ResponseDto<List<ScheduleResponseDto>>> getTodaySchedules(@AuthenticationPrincipal PrincipalUser principalUser) {
        ResponseDto<List<ScheduleResponseDto>> result = scheduleservice.getScheduleForToday(principalUser.getUserId());
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
