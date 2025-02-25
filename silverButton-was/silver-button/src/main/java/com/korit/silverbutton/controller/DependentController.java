package com.korit.silverbutton.controller;

import com.korit.silverbutton.common.constant.ApiMappingPattern;
import com.korit.silverbutton.dto.dependent.response.DependentResponseDto;
import com.korit.silverbutton.dto.ResponseDto;

import com.korit.silverbutton.dto.signIn.request.SignInRequestDto;
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

    private static final String DEPENDENT_POST = "/";
    private static final String DEPENDENT_GET = "/{id}";
    private static final String DEPENDENT_PUT = "/{id}";
    private static final String DEPENDENT_DELETE = "/{id}";

    @PostMapping(DEPENDENT_POST)
    public ResponseEntity<ResponseDto<DependentResponseDto>> signInDepen(
            @RequestBody String name, String phone, String role,
            @RequestBody SignInRequestDto dto
    ) {
        ResponseDto<DependentResponseDto> response = dependentService.signInDepen(role,name, phone);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(DEPENDENT_GET)
    public ResponseEntity<ResponseDto<DependentResponseDto>> getAllDepen(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @PathVariable String phone
    ) {
        ResponseDto<DependentResponseDto> response = dependentService.getAllDepen(principalUser.getId(), phone);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @PutMapping(DEPENDENT_PUT)
    public ResponseEntity<ResponseDto<DependentResponseDto>> updateDepen(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody UpdateRequestDto dto,
            @PathVariable Long id
    ) {

        ResponseDto<DependentResponseDto> response = dependentService.updateDepen(dto, principalUser);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(DEPENDENT_DELETE)
    public ResponseEntity<ResponseDto<Void>> deleteDepen(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @PathVariable String role, String name, String phone
    ) {
        ResponseDto<Void> response = dependentService.deleteDepen(role, name, phone);
        HttpStatus status = response.isResult() ? HttpStatus.NO_CONTENT : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

}
