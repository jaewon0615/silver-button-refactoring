package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.inquiryReplies.request.InquiryRepliesRequestDto;
import com.korit.silverbutton.dto.inquiryReplies.response.InquiryRepliesResponseDto;

import javax.annotation.Resource;
import java.util.List;

public interface InquiryRepliesService {
    ResponseDto<InquiryRepliesResponseDto> postinquiryReplies(Long userId, Long inquiryId, InquiryRepliesRequestDto dto);
    ResponseDto<Boolean> deleteInquiryRepliesById(Long id);

    ResponseDto<List<InquiryRepliesResponseDto>> getInquiryRepliesByInquiryId(Long inquiryId);
}
