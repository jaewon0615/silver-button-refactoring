package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.emergencyContact.request.EmergencyContactRequestDto;
import com.korit.silverbutton.dto.emergencyContact.response.EmergencyContactResponseDto;

import java.util.List;

public interface EmergencyContactService {
    ResponseDto<EmergencyContactResponseDto> postEmergencyContact(Long userId, EmergencyContactRequestDto dto);
    ResponseDto<List<EmergencyContactResponseDto>> getEmergencyContactByUserId(Long userId);
    ResponseDto<Boolean> deleteEmergencyContactById(Long id);
}
