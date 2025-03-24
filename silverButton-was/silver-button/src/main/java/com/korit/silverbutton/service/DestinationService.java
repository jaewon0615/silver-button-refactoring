package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.dependent.request.DependentRequestDto;
import com.korit.silverbutton.dto.dependent.response.DependentResponseDto;
import com.korit.silverbutton.dto.detination.request.DestinationRequestDto;
import com.korit.silverbutton.dto.detination.response.DestinationResponseDto;

import java.util.List;

public interface DestinationService {
    ResponseDto<DestinationResponseDto> postDestination(DestinationRequestDto dto);

    ResponseDto<DestinationResponseDto> getDestinationById(Long id);

    ResponseDto<List<DestinationResponseDto>> getDestinationByLocation(String location);

    ResponseDto<List<DestinationResponseDto>> findAll(DestinationRequestDto dto);

    ResponseDto<List<DestinationResponseDto>> getDestinationByRating(DestinationRequestDto dto);

    ResponseDto<Boolean> deleteDestinationById (Long id);

}
