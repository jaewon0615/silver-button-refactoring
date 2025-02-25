package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.dependent.response.DependentResponseDto;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.signIn.response.SignInResponseDto;

import com.korit.silverbutton.dto.signIn.request.SignInRequestDto;
import com.korit.silverbutton.dto.UpdateRequestDto;

import com.korit.silverbutton.principal.PrincipalUser;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

@Service
public interface DependentService {
    ResponseDto<SignInResponseDto> depenLogin(@Valid SignInRequestDto dto);

    ResponseDto<DependentResponseDto> signInDepen(String name, String phone, String role);

    ResponseDto<DependentResponseDto> getAllDepen(Long id, String phone);

    ResponseDto<DependentResponseDto> updateDepen(UpdateRequestDto dto, PrincipalUser principalUser);

    ResponseDto<Void> deleteDepen(String role, String name, String phone);

}
