package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.emergencyContact.request.EmergencyContactRequestDto;
import com.korit.silverbutton.dto.emergencyContact.response.EmergencyContactResponseDto;
import com.korit.silverbutton.entity.EmergencyContact;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.EmergencyContactRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.EmergencyContactService;
import jakarta.transaction.Transactional;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class EmergencyContactServiceImpl implements EmergencyContactService {
    private final EmergencyContactRepository emergencyContactRepository;
    private final UserRepository userRepository;

    @Override
    public ResponseDto<EmergencyContactResponseDto> postEmergencyContact(Long userId, EmergencyContactRequestDto dto) {
        EmergencyContactResponseDto data = null;
        LocalDate date = LocalDate.now();
        String name = dto.getName();
        String relation = dto.getRelation();
        String phone = dto.getPhone();
        String address = dto.getAddress();

        try {
            // User 객체를 데이터베이스에서 가져옵니다.
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

            EmergencyContact emergencyContact = EmergencyContact.builder()
                    .user(user)
                    .id(userId)
                    .name(name)
                    .phone(phone)
                    .address(address)
                    .relation(relation)
                    .createdAt(date.atStartOfDay())
                    .build();

            emergencyContactRepository.save(emergencyContact);
            data = new EmergencyContactResponseDto(emergencyContact);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<EmergencyContactResponseDto>> getEmergencyContactByUserId(Long userId) {
        List<EmergencyContactResponseDto> data = null;
        try {
            List<EmergencyContact> emergencyContacts = emergencyContactRepository.getEmergencyContactByUserId(userId);
            if(emergencyContacts.isEmpty()){
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = emergencyContacts.stream().map(EmergencyContactResponseDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<Boolean> deleteEmergencyContactById(Long id) {
        try {
            emergencyContactRepository.deleteEmergencyContactById(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, true);
    }
}

