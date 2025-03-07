package com.korit.silverbutton.controller;

import com.korit.silverbutton.common.constant.ApiMappingPattern;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.mealRecord.request.MealRecordRequestDto;
import com.korit.silverbutton.dto.mealRecord.response.MealRecordResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.MealRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiMappingPattern.MEAL_RECORD)
@RequiredArgsConstructor
public class MealRecordController {
    private static final String MEAL_RECORD_POST = "/";
    private static final String MEAL_RECORD_GET = "/{userId}";
    private static final String MEAL_RECORD_DELETE = "/{id}";

    private final MealRecordService mealRecordService;

    @PostMapping(MEAL_RECORD_POST)
    public ResponseEntity<ResponseDto<MealRecordResponseDto>> postMealRecord(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody MealRecordRequestDto dto
            ){
        ResponseDto<MealRecordResponseDto> response = mealRecordService.postMealRecord(principalUser.getId(),dto);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.OK;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(MEAL_RECORD_GET)
    public ResponseEntity<ResponseDto<List<MealRecordResponseDto>>> getMealRecordByUserId(@AuthenticationPrincipal PrincipalUser principalUser){
        ResponseDto<List<MealRecordResponseDto>> response = mealRecordService.getMealRecordByUserId(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.OK;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(MEAL_RECORD_DELETE)
    private ResponseEntity<ResponseDto<Boolean>> deleteMealRecordById(@PathVariable Long id){
        ResponseDto<Boolean> response = mealRecordService.deleteMealRecordById(id);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.OK;
        return ResponseEntity.status(status).body(response);
    }


}
