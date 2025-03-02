package com.korit.silverbutton.controller;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.healthRecord.requset.HealthRecordRequestDto;
import com.korit.silverbutton.dto.healthRecord.response.HealthRecordResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
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
    private static final String HEARTH_RECORD_GET = "/{id}";

    private final HealthRecordService healthRecordService;

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
    public ResponseEntity<ResponseDto<HealthRecordResponseDto>> getHealthRecordById(@PathVariable Long id) {
        ResponseDto<HealthRecordResponseDto> response = healthRecordService.getHealthRecordById(id);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping("/health-records/user/{userId}") // 사용자 ID로 건강 기록 조회
    public ResponseEntity<ResponseDto<List<HealthRecordResponseDto>>> getHealthRecordsByUserId(@PathVariable Long userId) {
        ResponseDto<List<HealthRecordResponseDto>> response = (ResponseDto<List<HealthRecordResponseDto>>) healthRecordService.getHealthRecordsByUserId(userId);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }
}
