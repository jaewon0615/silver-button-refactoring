package com.korit.silverbutton.controller;

import com.korit.silverbutton.common.constant.ApiMappingPattern;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.sleepRecord.requset.SleepRecordRequestDto;
import com.korit.silverbutton.dto.sleepRecord.response.SleepRecordResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.SleepRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiMappingPattern.SLEEP_RECORD)
@RequiredArgsConstructor
public class SleepRecordController {
    private final SleepRecordService sleepRecordService;

    private static final String SLEEP_RECORD_POST = "/";
    private static final String SLEEP_RECORD_GET = "/{userId}";
    private static final String SLEEP_RECORD_DELETE = "/{id}";


    @PostMapping(SLEEP_RECORD_POST)
    public ResponseEntity<ResponseDto<SleepRecordResponseDto>> postSleepRecord(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody SleepRecordRequestDto dto
            ){
        ResponseDto<SleepRecordResponseDto> response = sleepRecordService.postSleepRecord(principalUser.getId(),dto);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(SLEEP_RECORD_GET)
    public ResponseEntity<ResponseDto<List<SleepRecordResponseDto>>> getSleepRecordByUserId(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<List<SleepRecordResponseDto>> response = sleepRecordService.getSleepRecordByUserId(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(SLEEP_RECORD_DELETE)
    public ResponseEntity<ResponseDto<Boolean>> deleteSleepRecordById(
            @PathVariable Long id
    ){
        ResponseDto<Boolean> response = sleepRecordService.deleteSleepRecordById(id);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }
}
