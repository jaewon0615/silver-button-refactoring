package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.healthRecord.requset.HealthRecordRequestDto;
import com.korit.silverbutton.dto.healthRecord.response.HealthRecordResponseDto;
import com.korit.silverbutton.entity.HealthRecord;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.HealthRecordRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.HealthRecordService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;



@Service
@Transactional
@RequiredArgsConstructor
public class HealthRecordServiceImpl implements HealthRecordService {
    private final HealthRecordRepository healthRecordRepository;
    private final UserRepository userRepository;


    @Override
    public ResponseDto<HealthRecordResponseDto> postHealthRecord(Long userId, HealthRecordRequestDto dto) {
        HealthRecordResponseDto data = null;
        LocalDate date = LocalDate.now();
        Integer bloodPressureSystolic = dto.getBloodPressureSystolic();
        Integer bloodPressureDiastolic = dto.getBloodPressureDiastolic();
        Integer bloodSugar = dto.getBloodSugar();
        BigDecimal weight = dto.getWeight();
        String notes = dto.getNotes();
        BigDecimal height = dto.getHeight();

        try {
            // User 객체를 데이터베이스에서 가져옵니다.
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

            // HealthRecord 객체를 생성합니다.
            HealthRecord healthRecord = HealthRecord.builder()
                    .user(user) // 유저를 설정합니다.
                    .recordDate(date)
                    .bloodPressureSystolic(bloodPressureSystolic)
                    .bloodPressureDiastolic(bloodPressureDiastolic)
                    .bloodSugar(bloodSugar)
                    .weight(weight)
                    .height(height)
                    .notes(notes)
                    .build();

            healthRecordRepository.save(healthRecord);
            data = new HealthRecordResponseDto(healthRecord);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }

    public ResponseDto<HealthRecordResponseDto> updateHealthRecord(Long userId, Long recordId, HealthRecordRequestDto dto) {
        HealthRecordResponseDto data = null;

        try {
            // 기존 HealthRecord 조회
            HealthRecord existingRecord = healthRecordRepository.findById(recordId)
                    .orElseThrow(() -> new IllegalArgumentException("HealthRecord not found with id: " + recordId));

            // 사용자 권한 체크
            if (!existingRecord.getUser().getId().equals(userId)) {
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR); // 권한 없음
            }

            // 필드 업데이트
            existingRecord.setRecordDate(dto.getRecordDate());
            existingRecord.setBloodPressureSystolic(dto.getBloodPressureSystolic());
            existingRecord.setBloodPressureDiastolic(dto.getBloodPressureDiastolic());
            existingRecord.setBloodSugar(dto.getBloodSugar());
            existingRecord.setWeight(dto.getWeight());
            existingRecord.setNotes(dto.getNotes());

            // 수정된 HealthRecord 저장
            HealthRecord updatedRecord = healthRecordRepository.save(existingRecord);
            data = new HealthRecordResponseDto(updatedRecord);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }

    @Override
    public ResponseDto<List<HealthRecordResponseDto>> getHealthRecordByUserId(Long userId) {
        List<HealthRecordResponseDto> data = null;
        try {
            List<HealthRecord> healthRecords = healthRecordRepository.getHealthRecordsByUserId(userId);
            if (healthRecords.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = healthRecords.stream().map(HealthRecordResponseDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }

    @Override
    public ResponseDto<Boolean> deleteHealthRecordById(Long id) {
        try {
            healthRecordRepository.deleteHealthRecordById(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, true);
    }

    @Override
    public ResponseDto<List<HealthRecordResponseDto>> getLatestHealthRecordByUserId(Long userId) {
        List<HealthRecordResponseDto> data = null;
        try {
            List<HealthRecord> healthRecords = healthRecordRepository.getLatestHealthRecordByUserId(userId);
            if (healthRecords.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = healthRecords.stream().map(HealthRecordResponseDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }
}




