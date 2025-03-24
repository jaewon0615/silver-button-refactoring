package com.korit.silverbutton.controller;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.exercise.request.ExerciseRequestDto;
import com.korit.silverbutton.dto.exercise.response.ExerciseResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.*;

@RestController
@RequestMapping(EXERCISE)
@RequiredArgsConstructor
public class ExerciseController {
    private static final String EXERCISE_POST = "/";
    private static final String EXERCISE_GET = "/{userId}";
    private static final String EXERCISE_DELETE = "/{id}";

    private final ExerciseService exerciseService;

    @PostMapping(EXERCISE_POST)
    public ResponseEntity<ResponseDto<ExerciseResponseDto>> postExercise (
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody ExerciseRequestDto dto
            ){
        ResponseDto<ExerciseResponseDto> response = exerciseService.postExercise(principalUser.getId(),dto);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(EXERCISE_GET)
    public ResponseEntity<ResponseDto<List<ExerciseResponseDto>>> getExercisesByUserId (@AuthenticationPrincipal PrincipalUser principalUser){
        ResponseDto<List<ExerciseResponseDto>> response = exerciseService.getExercisesByUserId(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(EXERCISE_DELETE)
    public ResponseEntity<ResponseDto<Boolean>> deleteExerciseById(@PathVariable Long id){
        ResponseDto<Boolean> response = exerciseService.deleteExerciseById(id);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

}
