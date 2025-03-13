package com.korit.silverbutton.controller;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.emergencyContact.request.EmergencyContactRequestDto;
import com.korit.silverbutton.dto.emergencyContact.response.EmergencyContactResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.EmergencyContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.EMERGENCY_CONTACT;
import static com.korit.silverbutton.common.constant.ApiMappingPattern.HEALTH_RECORD;

@RestController
@RequestMapping(EMERGENCY_CONTACT)
@RequiredArgsConstructor
public class EmergencyContactController {

    private static final String EMERGENCY_CONTACT_POST = "/create";
    private static final String EMERGENCY_CONTACT_GET = "/{userId}";
    private static final String EMERGENCY_CONTACT_DELETE = "/{id}";

    private final EmergencyContactService emergencyContactService;

    @PostMapping(EMERGENCY_CONTACT_POST)
    public ResponseEntity<ResponseDto<EmergencyContactResponseDto>>
    postEmergencyContact(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody EmergencyContactRequestDto dto
            ){
        ResponseDto<EmergencyContactResponseDto>
                response = emergencyContactService.postEmergencyContact(principalUser.getId(),dto);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(EMERGENCY_CONTACT_GET)
    private ResponseEntity<ResponseDto<List<EmergencyContactResponseDto>>> getEmergencyContactByUserId(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<List<EmergencyContactResponseDto>> response = emergencyContactService.getEmergencyContactByUserId(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(EMERGENCY_CONTACT_DELETE)
    private ResponseEntity<ResponseDto<Boolean>> deleteEmergencyContactById(
            @PathVariable Long id
    ){
        ResponseDto<Boolean> response = emergencyContactService.deleteEmergencyContactById(id);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }
}
