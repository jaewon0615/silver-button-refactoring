package com.korit.silverbutton.service.implement;


import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.mealRecord.request.MealRecordRequestDto;
import com.korit.silverbutton.dto.mealRecord.response.MealRecordResponseDto;
import com.korit.silverbutton.entity.MealRecord;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.MealRecordRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.MealRecordService;
import jakarta.transaction.Transactional;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class MealRecordServiceImpl implements MealRecordService {
    private final UserRepository userRepository;
    private final MealRecordRepository mealRecordRepository;

    @Override
    public ResponseDto<MealRecordResponseDto> postMealRecord(Long userId, MealRecordRequestDto dto) {
        MealRecordResponseDto data = null;
        LocalDateTime now = LocalDateTime.now();
        String mealTime = dto.getMealTime();
        String foodItems = dto.getFoodItems();
        int calories = dto.getCalories();

        try {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

            MealRecord mealRecord = MealRecord.builder()
                    .user(user)
                    .mealTime(mealTime)
                    .calories(calories)
                    .foodItems(foodItems)
                    .mealDate(LocalDateTime.now())
                    .build();
            mealRecordRepository.save(mealRecord);
            data = new MealRecordResponseDto(mealRecord);
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<MealRecordResponseDto>> getMealRecordByUserId(Long userId) {
        List<MealRecordResponseDto> data = null;
        try {
            List<MealRecord> mealRecords = mealRecordRepository.getMealRecordByUserId(userId);
            if (mealRecords.isEmpty()){
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = mealRecords.stream().map
                    (MealRecordResponseDto::new).collect(Collectors.toList());
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<Boolean> deleteMealRecordById(Long id) {
        try {
            mealRecordRepository.deleteById(id);
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, true);
    }
}
