package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.inquiries.request.InquiriesRequestDto;
import com.korit.silverbutton.dto.inquiries.response.InquiriesResponseDto;
import com.korit.silverbutton.entity.Inquiries;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.repository.InquiriesRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.InquiriesService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class InquiriesServiceImpl implements InquiriesService {
    private final InquiriesRepository inquiriesRepository;
    private final UserRepository userRepository;

    @Override
    public ResponseDto<InquiriesResponseDto> postInquiries(Long userId, InquiriesRequestDto dto) {
        InquiriesResponseDto data = null;
        String title = dto.getTitle() ;
        String content = dto.getContent();
        String password = dto.getPassword();

        try {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

            Inquiries inquiries = Inquiries.builder()
                    .user(user)
                    .title(title)
                    .content(content)
                    .password(password)
                    .createdAt(LocalDateTime.now())
                    .build();

            inquiriesRepository.save(inquiries);
            data = new InquiriesResponseDto(inquiries);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed("리뷰 작성 중 오류가 발생했습니다: " + e.getMessage());
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<InquiriesResponseDto> getInquiriesById(Long id) {
        InquiriesResponseDto data = null;
        try {
            Optional<Inquiries> optionalInquiries = inquiriesRepository.getInquiriesById(id);
            if (optionalInquiries.isEmpty()){
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            Inquiries inquiries = optionalInquiries.get();
            inquiriesRepository.save(inquiries);
            data = new InquiriesResponseDto(inquiries);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<InquiriesResponseDto>> findAll(InquiriesRequestDto dto) {
        List<InquiriesResponseDto> data = null;
        try {
            List<Inquiries> inquiries = inquiriesRepository.findAll();
            if (inquiries.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = inquiries.stream().map(InquiriesResponseDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<InquiriesResponseDto>> getInquiriesByUserId(Long userId) {
        List<InquiriesResponseDto> data = null;
        try {
            List<Inquiries> inquiries = inquiriesRepository.getInquiriesByUserId(userId);
            if (inquiries.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = inquiries.stream().map(InquiriesResponseDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    @Transactional
    public ResponseDto<Boolean> deleteInquiriesById(Long id) {
        try {
            inquiriesRepository.deleteInquiriesById(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,true);
    }
}
