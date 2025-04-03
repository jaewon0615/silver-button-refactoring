package com.korit.silverbutton.controller;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.inquiries.request.InquiriesRequestDto;
import com.korit.silverbutton.dto.inquiries.response.InquiriesResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.InquiriesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.HEALTH_RECORD;
import static com.korit.silverbutton.common.constant.ApiMappingPattern.INQUIRIES;

// 아예 전체 조회 | 내가 쓴 문의 전체 조회 | 단건 조회

@RestController
@RequestMapping(INQUIRIES)
@RequiredArgsConstructor
public class InquiriesController {
    private final InquiriesService inquiriesService;
    private static final String INQUIRIES_POST = "/";
    private static final String INQUIRIES_GET = "/id/{id}";
    private static final String INQUIRIES_GET_USERID = "userId/{userId}";
    private static final String INQUIRIES_GET_ALL = "all/all";
    private static final String INQUIRIES_DELETE_ID = "/delete/{id}";

    @PostMapping(INQUIRIES_POST)
    public ResponseEntity<ResponseDto<InquiriesResponseDto>> postInquiries(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody InquiriesRequestDto dto
    ){
        ResponseDto<InquiriesResponseDto> response = inquiriesService.postInquiries(principalUser.getId(),dto);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    // 단건 조회
    @GetMapping(INQUIRIES_GET)
    public ResponseEntity<ResponseDto<InquiriesResponseDto>> getInquiriesById(
            @PathVariable Long id
    ){
        ResponseDto<InquiriesResponseDto> response = inquiriesService.getInquiriesById(id);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    // 전체 조회
    @GetMapping(INQUIRIES_GET_ALL)
    public ResponseEntity<ResponseDto<List<InquiriesResponseDto>>> findAll(
            InquiriesRequestDto dto
    ){
        ResponseDto<List<InquiriesResponseDto>> response = inquiriesService.findAll(dto);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    // 유저가 작성한 문의글 조회
    @GetMapping(INQUIRIES_GET_USERID)
    public ResponseEntity<ResponseDto<List<InquiriesResponseDto>>> getInquiriesByUserId(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<List<InquiriesResponseDto>> response = inquiriesService.getInquiriesByUserId(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(INQUIRIES_DELETE_ID)
    public ResponseEntity<ResponseDto<Boolean>> deleteInquiriesById(
            @PathVariable Long id
    ){
        ResponseDto<Boolean> response = inquiriesService.deleteInquiriesById(id);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

}
