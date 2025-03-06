package com.korit.silverbutton.controller;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.healthRecord.requset.HealthRecordRequestDto;
import com.korit.silverbutton.dto.healthRecord.response.HealthRecordResponseDto;
import com.korit.silverbutton.entity.HealthRecord;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.repository.HealthRecordRepository;
import com.korit.silverbutton.service.HealthRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.HEALTH_RECORD;

@RestController
@RequestMapping(HEALTH_RECORD)
@RequiredArgsConstructor
public class HealthRecordController {
    private static final String HEARTH_RECORD_POST = "/";
    private static final String HEARTH_RECORD_PUT = "/{id}";
    private static final String HEARTH_RECORD_GET = "/{userId}";
    private static final String HEARTH_RECORD_DELETE = "/{id}";
    private static final String HEALTH_RECORD_GET_LATEST = "/latest";

    private final HealthRecordService healthRecordService;
    private final HealthRecordRepository healthRecordRepository;

    @PostMapping(HEARTH_RECORD_POST)
    public ResponseEntity<ResponseDto<HealthRecordResponseDto>> postHealthRecord(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody HealthRecordRequestDto dto
            ){
        ResponseDto<HealthRecordResponseDto>
                response = healthRecordService.postHealthRecord(principalUser.getId(),dto);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @PostMapping(HEARTH_RECORD_PUT)
    public ResponseEntity<ResponseDto<HealthRecordResponseDto>> updateHealthRecord(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @PathVariable Long id,
            @RequestBody HealthRecordRequestDto dto
    ) {
        // principalUser가 null인지 확인
        if (principalUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(ResponseDto.setFailed(ResponseMessage.UNAUTHORIZED));
        }

        // 서비스 메서드 호출
        ResponseDto<HealthRecordResponseDto> response = healthRecordService.updateHealthRecord(principalUser.getId(), id, dto);

        // 응답 상태 설정
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(HEARTH_RECORD_GET)
    public ResponseEntity<ResponseDto<List<HealthRecordResponseDto>>> getHealthRecordByUserId(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<List<HealthRecordResponseDto>> response = healthRecordService.getHealthRecordByUserId(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(HEARTH_RECORD_DELETE)
    public ResponseEntity<ResponseDto<Boolean>> deleteHealthRecordById(@PathVariable Long id){
        ResponseDto<Boolean> response = healthRecordService.deleteHealthRecordById(id);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(HEALTH_RECORD_GET_LATEST)
    public ResponseEntity<ResponseDto<List<HealthRecordResponseDto>>> getLatestHealthRecordByUserId(@AuthenticationPrincipal PrincipalUser principalUser){
        ResponseDto<List<HealthRecordResponseDto>> response = healthRecordService.getLatestHealthRecordByUserId(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }
}
















