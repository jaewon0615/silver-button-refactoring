package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.inquiries.request.InquiriesRequestDto;
import com.korit.silverbutton.dto.inquiries.response.InquiriesResponseDto;

import java.util.List;

public interface InquiriesService {
    ResponseDto<InquiriesResponseDto> postInquiries(Long userId, InquiriesRequestDto dto);

    ResponseDto<InquiriesResponseDto> getInquiriesById(Long id);

    ResponseDto<List<InquiriesResponseDto>> findAll(InquiriesRequestDto dto);

    ResponseDto<List<InquiriesResponseDto>> getInquiriesByUserId(Long userId);

    ResponseDto<Boolean> deleteInquiriesById(Long id);

}
