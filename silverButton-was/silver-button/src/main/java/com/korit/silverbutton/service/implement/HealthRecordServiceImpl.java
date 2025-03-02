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
    public ResponseDto<HealthRecordResponseDto> getHealthRecordById(Long id
    ) {
        HealthRecordResponseDto data = null;
        try {
            Optional<HealthRecord> optionalHealthRecord = healthRecordRepository.findById(id);
            if (optionalHealthRecord.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            HealthRecord healthRecord = optionalHealthRecord.get();
            healthRecordRepository.save(healthRecord);
            data = new HealthRecordResponseDto(healthRecord);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }

    @Override
    public List<HealthRecordResponseDto> getHealthRecordsByUserId(Long userId) {
        {
            List<HealthRecord> records = healthRecordRepository.findByUserId(userId); // 사용자의 건강 기록 조회
            List<HealthRecordResponseDto> responseDtoList = records.stream()
                    .map(record -> new HealthRecordResponseDto(record))
                    .collect(Collectors.toList());

            return (List<HealthRecordResponseDto>) new ResponseDto<>(true, responseDtoList);
        }
    }


}