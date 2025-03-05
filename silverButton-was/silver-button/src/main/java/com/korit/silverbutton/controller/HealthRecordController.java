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
    private static final String HEARTH_RECORD_GET = "/";

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
    public ResponseDto<List<HealthRecordResponseDto>> getHealthRecords(@AuthenticationPrincipal PrincipalUser principalUser) {
        // 로그인된 사용자 정보에서 userId 추출
        Long id = principalUser.getId(); // User 객체에서 사용자 ID 또는 이메일을 가져올 수 있습니다.

        // 서비스 계층에서 해당 사용자의 건강 기록 조회
        List<HealthRecordResponseDto> healthRecords = healthRecordRepository.findHealthRecordsByUserId(id);

        // 조회된 건강 기록을 ResponseDto로 반환
        return ResponseDto.setSuccess(healthRecords);
    }
    }
















