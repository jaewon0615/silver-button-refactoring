package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.diary.request.DiaryRequestDto;
import com.korit.silverbutton.dto.diary.response.DiaryResponseDto;
import com.korit.silverbutton.entity.Diary;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.DiaryRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.DiaryService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class DiaryServiceImpl implements DiaryService {
    private final DiaryRepository diaryRepository;
    private final UserRepository userRepository;
    @Override
    public ResponseDto<DiaryResponseDto> postDiary(Long userId, DiaryRequestDto dto) {
        DiaryResponseDto data = null;
        LocalDate date = LocalDate.now();
        String title = dto.getTitle();
        String content = dto.getContent();
        String weather = dto.getWeather();
        String mood = dto.getMood();
        try {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

            Diary diary = Diary.builder()
                    .user(user)
                    .title(title)
                    .content(content)
                    .weather(weather)
                    .mood(mood)
                    .createdAt(date.atStartOfDay())
                    .build();

            diaryRepository.save(diary);
            data = new DiaryResponseDto(diary);
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<DiaryResponseDto>> getDiaryByUserId(Long userId) {
        List<DiaryResponseDto> data = null;
        try {
            List<Diary> diaries = diaryRepository.getDiaryByUserId(userId);
            if (diaries.isEmpty()){
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = diaries.stream().map(DiaryResponseDto::new).collect(Collectors.toList());
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<DiaryResponseDto> getDiaryById(Long id) {
        DiaryResponseDto data = null;
        try {
            Optional<Diary> optionalDiary = diaryRepository.findById(id);
            if (optionalDiary.isEmpty()){
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            Diary diary = optionalDiary.get();
            diaryRepository.save(diary);
            data = new DiaryResponseDto(diary);
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<Boolean> deleteDiaryById(Long id) {
        try {
            diaryRepository.deleteById(id);
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,true);
    }
}
