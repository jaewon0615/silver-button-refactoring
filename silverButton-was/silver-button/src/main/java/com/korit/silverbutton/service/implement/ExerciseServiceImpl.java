package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.exercise.request.ExerciseRequestDto;
import com.korit.silverbutton.dto.exercise.response.ExerciseResponseDto;
import com.korit.silverbutton.entity.Exercise;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.ExerciseRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.ExerciseService;
import jakarta.transaction.Transactional;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class ExerciseServiceImpl implements ExerciseService {
    private final ExerciseRepository exerciseRepository;
    private final UserRepository userRepository;

    @Override
    public ResponseDto<ExerciseResponseDto> postExercise(Long userId, ExerciseRequestDto dto) {
        ExerciseResponseDto data = null;
        LocalDate date = LocalDate.now();
        String exerciseType = dto.getExerciseType();
        int duration = dto.getDuration();
        int caloriesBurned = dto.getCaloriesBurned();
        String intensity = dto.getIntensity();
        String location = dto.getLocation();
        Date exerciseDate = dto.getExerciseDate();
        String notes = dto.getNotes();
        LocalDateTime createdDate = LocalDateTime.now();
        try {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));
            Exercise exercise = Exercise.builder()
                    .user(user)
                    .exerciseType(exerciseType)
                    .duration(duration)
                    .caloriesBurned(caloriesBurned)
                    .intensity(intensity)
                    .location(location)
                    .exerciseDate(exerciseDate)
                    .notes(notes)
                    .createdAt(date.atStartOfDay())
                    .build();

            exerciseRepository.save(exercise);
            data = new ExerciseResponseDto(exercise);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<ExerciseResponseDto>> getExercisesByUserId(Long userId) {
        List<ExerciseResponseDto> data = null;
        try {
            List<Exercise> exercises = exerciseRepository.getExercisesByUserId(userId);
            if (exercises.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = exercises.stream().map(ExerciseResponseDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<Boolean> deleteExerciseById(Long id) {
        try {
            exerciseRepository.deleteExerciseById(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, true);
    }
}
