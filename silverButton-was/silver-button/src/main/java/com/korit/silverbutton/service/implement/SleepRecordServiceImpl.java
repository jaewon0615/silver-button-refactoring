package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.sleepRecord.requset.SleepRecordRequestDto;
import com.korit.silverbutton.dto.sleepRecord.response.SleepRecordResponseDto;
import com.korit.silverbutton.entity.SleepRecord;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.SleepRecordRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.SleepRecordService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class SleepRecordServiceImpl implements SleepRecordService {
    private final SleepRecordRepository sleepRecordRepository;
    private final UserRepository userRepository;

    @Override
    public ResponseDto<SleepRecordResponseDto> postSleepRecord(Long userId, SleepRecordRequestDto dto) {
        SleepRecordResponseDto data = null;
        Date sleepDate = dto.getSleepDate();
        int sleepTime = dto.getSleepTime();
        int wakeTime = dto.getWakeTime();
        int sleepDuration = dto.getSleepDuration();
        int sleepQuality = dto.getSleepQuality();
        int sleepInterruptionCount = dto.getSleepInterruptionCount();
        String notes = dto.getNotes();
        String dreamOccurred = dto.getDreamOccurred();
        try {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));
            SleepRecord sleepRecord = SleepRecord.builder()
                    .user(user)
                    .sleepDate(sleepDate)
                    .sleepTime(sleepTime)
                    .wakeTime(wakeTime)
                    .sleepDuration(sleepDuration)
                    .sleepQuality(sleepQuality)
                    .sleepInterruptionCount(sleepInterruptionCount)
                    .notes(notes)
                    .dreamOccurred(dreamOccurred)
                    .createdAt(LocalDateTime.now())
                    .build();

            sleepRecordRepository.save(sleepRecord);
            data = new SleepRecordResponseDto(sleepRecord);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<SleepRecordResponseDto>> getSleepRecordByUserId(Long userId) {
        List<SleepRecordResponseDto> data = null;
        try {
            List<SleepRecord> sleepRecords = sleepRecordRepository.getSleepRecordByUserId(userId);
            if (sleepRecords.isEmpty()){
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = sleepRecords.stream().map(SleepRecordResponseDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<Boolean> deleteSleepRecordById(Long id) {
        try {
            sleepRecordRepository.deleteSleepRecordById(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,true);
    }
}
