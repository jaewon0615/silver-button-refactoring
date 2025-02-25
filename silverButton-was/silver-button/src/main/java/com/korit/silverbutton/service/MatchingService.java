package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.matching.response.MatchingResponseDto;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.user.response.PartnerProfileDto;

import com.korit.silverbutton.entity.User;

import java.util.List;

public interface MatchingService {
    ResponseDto<List<MatchingResponseDto>> getAllMatchings();

    Boolean getMatchingById(Long userId);

    ResponseDto<PartnerProfileDto> getPartner(Long userId, String role);

    ResponseDto<Void> deleteMatching(Long id, Long userId);

    ResponseDto<MatchingResponseDto> createMatching(Long caregiverId, Long dependentId);

    ResponseDto<List<User>> contractablecaregiver(Long id);
}
