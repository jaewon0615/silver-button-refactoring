package com.korit.silverbutton.controller;


import com.korit.silverbutton.common.constant.ApiMappingPattern;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.userSavedDestinations.request.UserSavedDestinationRequestDto;
import com.korit.silverbutton.dto.userSavedDestinations.response.UserSavedDestinationResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.UserSavedDestinationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiMappingPattern.USERSAVEDDESTINATION)
@RequiredArgsConstructor
public class UserSavedDestinationController {
    private final UserSavedDestinationService userSavedDestinationService;

    private static final String USERSAVEDDESTINATION_POST = "/";
    private static final String USERSAVEDDESTINATION_GET = "/{userId}";
    private static final String USERSAVEDDESTINATION_DELETE = "/{id}";

    @PostMapping(USERSAVEDDESTINATION_POST)
    public ResponseEntity<ResponseDto<UserSavedDestinationResponseDto>> postUserSavedDestination(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody UserSavedDestinationRequestDto dto
            ){
        ResponseDto<UserSavedDestinationResponseDto> response = userSavedDestinationService.postUserSavedDestination(dto, principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(USERSAVEDDESTINATION_GET)
    public ResponseEntity<ResponseDto<List<UserSavedDestinationResponseDto>>> getUserSavedDestinationByUserId(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<List<UserSavedDestinationResponseDto>> response = userSavedDestinationService.getUserSavedDestinationByUserId(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(USERSAVEDDESTINATION_DELETE)
    private ResponseEntity<ResponseDto<Boolean>> deleteUserSavedDestinationById(
            @PathVariable Long id
    ){
        ResponseDto<Boolean> response = userSavedDestinationService.deleteUserSavedDestinationById(id);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }
}
