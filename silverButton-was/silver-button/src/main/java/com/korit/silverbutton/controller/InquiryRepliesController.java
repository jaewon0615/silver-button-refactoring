package com.korit.silverbutton.controller;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.inquiryReplies.request.InquiryRepliesRequestDto;
import com.korit.silverbutton.dto.inquiryReplies.response.InquiryRepliesResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.InquiryRepliesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.INQUIRIES_REPLIES;
import static com.korit.silverbutton.common.constant.ApiMappingPattern.REVIEW;

@RestController
@RequestMapping(INQUIRIES_REPLIES)
@RequiredArgsConstructor
public class InquiryRepliesController {
    private final InquiryRepliesService inquiryRepliesService;

    private static final String INQUIRIES_REPLIES_POST = "/{inquiryId}";
    private static final String INQUIRIES_REPLIES_DELETE = "/{id}";
    private static final String INQUIRIES_REPLIES_GET = "/inquiryId/{inquiryId}";

    @PostMapping(INQUIRIES_REPLIES_POST)
    public ResponseEntity<ResponseDto<InquiryRepliesResponseDto>> postinquiryReplies(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @PathVariable Long inquiryId,
            @RequestBody InquiryRepliesRequestDto dto
            ){
        ResponseDto<InquiryRepliesResponseDto> response = inquiryRepliesService.postinquiryReplies(principalUser.getId(),inquiryId,dto);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(INQUIRIES_REPLIES_DELETE)
    public ResponseEntity<ResponseDto<Boolean>> deleteInquiryRepliesById(@PathVariable Long id) {
        ResponseDto<Boolean> response = inquiryRepliesService.deleteInquiryRepliesById(id);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(INQUIRIES_REPLIES_GET)
    public ResponseEntity<ResponseDto<List<InquiryRepliesResponseDto>>> getInquiryRepliesByInquiryId(
            @PathVariable Long inquiryId
    ){
        ResponseDto<List<InquiryRepliesResponseDto>> response = inquiryRepliesService.getInquiryRepliesByInquiryId(inquiryId);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }
}
