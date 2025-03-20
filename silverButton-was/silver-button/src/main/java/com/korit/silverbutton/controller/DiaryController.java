package com.korit.silverbutton.controller;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.diary.request.DiaryRequestDto;
import com.korit.silverbutton.dto.diary.response.DiaryResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.DiaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.DIARY;
import static com.korit.silverbutton.common.constant.ApiMappingPattern.EMERGENCY_CONTACT;

@RestController
@RequestMapping(DIARY)
@RequiredArgsConstructor
public class DiaryController {

    private final DiaryService diaryService;

    private static final String DIARY_POST = "/";
    private static final String DIARY_GET_USERID = "/userId/{userId}";
    private static final String DIARY_GET = "/diaryId/{id}";
    private static final String DIARY_DELETE = "/{id}";

    @PostMapping(DIARY_POST)
    public ResponseEntity<ResponseDto<DiaryResponseDto>> postDiary(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody DiaryRequestDto dto
            ){
        ResponseDto<DiaryResponseDto> response = diaryService.postDiary(principalUser.getId(),dto);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(DIARY_GET_USERID)
    private ResponseEntity<ResponseDto<List<DiaryResponseDto>>> getDiaryByUserId(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<List<DiaryResponseDto>> response = diaryService.getDiaryByUserId(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(DIARY_GET)
    private ResponseEntity<ResponseDto<DiaryResponseDto>> getDiaryById(
            @PathVariable Long id
    ){
        ResponseDto<DiaryResponseDto> response = diaryService.getDiaryById(id);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(DIARY_DELETE)
    private ResponseEntity<ResponseDto<Boolean>> deleteDiaryById(
            @PathVariable Long id
    ){
        ResponseDto<Boolean> response = diaryService.deleteDiaryById(id);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }
}
