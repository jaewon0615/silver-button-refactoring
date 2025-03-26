package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.userSavedDestinations.request.UserSavedDestinationRequestDto;
import com.korit.silverbutton.dto.userSavedDestinations.response.UserSavedDestinationResponseDto;
import com.korit.silverbutton.entity.Destination;
import com.korit.silverbutton.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserSavedDestinationService {
    ResponseDto<UserSavedDestinationResponseDto> postUserSavedDestination(UserSavedDestinationRequestDto dto,Long userId);
    ResponseDto<List<UserSavedDestinationResponseDto>> getUserSavedDestinationByUserId(Long userId);
    ResponseDto<Boolean> deleteUserSavedDestinationById(Long id);

}
