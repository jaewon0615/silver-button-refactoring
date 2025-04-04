package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.inquiryReplies.request.InquiryRepliesRequestDto;
import com.korit.silverbutton.dto.inquiryReplies.response.InquiryRepliesResponseDto;
import com.korit.silverbutton.entity.Destination;
import com.korit.silverbutton.entity.Inquiries;
import com.korit.silverbutton.entity.InquiryReplies;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.InquiriesRepository;
import com.korit.silverbutton.repository.InquiryRepliesRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.InquiryRepliesService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class InquiryRepliesServiceImpl implements InquiryRepliesService {
    private final InquiryRepliesRepository inquiryRepliesRepository;
    private final UserRepository userRepository;
    private final InquiriesRepository inquiriesRepository;

    @Override
    public ResponseDto<InquiryRepliesResponseDto> postinquiryReplies(Long userId, Long inquiryId, InquiryRepliesRequestDto dto) {
        InquiryRepliesResponseDto data = null;
        String reply = dto.getReply();
        String inputPassword = dto.getPassword();  // 사용자가 입력한 비밀번호

        try {
            User user = userRepository.findById(userId).orElse(null);
            Inquiries inquiries = inquiriesRepository.findById(inquiryId).orElse(null);

            if (inquiries == null) {
                return ResponseDto.setFailed("문의글이 존재하지 않습니다.");
            }

            // 1️⃣ 비밀번호 검증 (비밀번호 해싱 여부에 따라 비교 방식 결정)
            if (!inputPassword.equals(inquiries.getPassword())) {
                return ResponseDto.setFailed("비밀번호가 틀렸습니다.");
            }

            // 2️⃣ 답변 저장
            InquiryReplies inquiryReplies = InquiryReplies.builder()
                    .user(user)
                    .reply(reply)
                    .inquiries(inquiries) // 변수명 소문자로 수정 (컨벤션 일관성 유지)
                    .createdAt(LocalDateTime.now())
                    .build();

            inquiryRepliesRepository.save(inquiryReplies);
            data = new InquiryRepliesResponseDto(inquiryReplies);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }

        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }

    @Override
    @Transactional
    public ResponseDto<Boolean> deleteInquiryRepliesById(Long id) {
        try {
            inquiryRepliesRepository.deleteInquiryRepliesById(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, true);
    }

}
