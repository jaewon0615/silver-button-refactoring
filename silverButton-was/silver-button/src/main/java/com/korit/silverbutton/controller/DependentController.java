package com.korit.silverbutton.controller;

import com.korit.silverbutton.common.constant.ApiMappingPattern;
import com.korit.silverbutton.dto.Dependent.ResponseDto.DependentResponseDto;
import com.korit.silverbutton.dto.ResponseDto;

import com.korit.silverbutton.dto.SignIn.Request.SignInRequestDto;
import com.korit.silverbutton.dto.UpdateRequestDto;
import com.korit.silverbutton.principal.PrincipalUser;

import com.korit.silverbutton.service.DependentService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(ApiMappingPattern.DEPENDENT)
@RequiredArgsConstructor
public class DependentController {

    private final DependentService dependentService;

    private static final String DEPENDENT_PATH = "/dependent";
    @PostMapping("api/v1/signin/dependents")
    public ResponseEntity<ResponseDto<DependentResponseDto>> signInDepen(
            @RequestBody String name, String phone, String role,
            @RequestBody SignInRequestDto dto
    ) {
        ResponseDto<DependentResponseDto> response = dependentService.signInDepen(role,name, phone);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping("/api/v1/signin/dependents/{id}")
    public ResponseEntity<ResponseDto<DependentResponseDto>> getAllDepen(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @PathVariable String phone
    ) {
        ResponseDto<DependentResponseDto> response = dependentService.getAllDepen(principalUser.getId(), phone);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @PutMapping("/api/v1/signin/dependents/{id}")
    public ResponseEntity<ResponseDto<DependentResponseDto>> updateDepen(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody UpdateRequestDto dto,
            @PathVariable Long id
    ) {

        ResponseDto<DependentResponseDto> response = dependentService.updateDepen(dto, principalUser);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping("/api/v1/signin/dependents/{id}")
    public ResponseEntity<ResponseDto<Void>> deleteDepen(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @PathVariable String role, String name, String phone
    ) {
        ResponseDto<Void> response = dependentService.deleteDepen(role, name, phone);
        HttpStatus status = response.isResult() ? HttpStatus.NO_CONTENT : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

}
