package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.userSavedDestinations.request.UserSavedDestinationRequestDto;
import com.korit.silverbutton.dto.userSavedDestinations.response.UserSavedDestinationResponseDto;
import com.korit.silverbutton.entity.Destination;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.entity.UserSavedDestination;
import com.korit.silverbutton.repository.DestinationRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.repository.UserSavedDestinationRepository;
import com.korit.silverbutton.service.UserSavedDestinationService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
@RequiredArgsConstructor
@Transactional
public class UserSavedDestinationServiceImpl implements UserSavedDestinationService {
    private final UserSavedDestinationRepository userSavedDestinationRepository;
    private final UserRepository userRepository;
    private final DestinationRepository destinationRepository;

    @Override
    public ResponseDto<UserSavedDestinationResponseDto> postUserSavedDestination(UserSavedDestinationRequestDto dto, Long userId) {
        UserSavedDestinationResponseDto data = null;
        try {
            User user = userRepository.findById(userId).orElse(null);
            Destination destination = destinationRepository.findById(dto.getDestinationId()).orElse(null);

            UserSavedDestination userSavedDestination = UserSavedDestination.builder()
                    .user(user)
                    .destination(destination)
                    .build();
            userSavedDestinationRepository.save(userSavedDestination);
            assert destination != null;
            data = new UserSavedDestinationResponseDto(userSavedDestination);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);

    }

    @Override
    public ResponseDto<List<UserSavedDestinationResponseDto>> getUserSavedDestinationByUserId(Long userId) {
        List<UserSavedDestinationResponseDto> data = null;
        try {
            List<UserSavedDestination> userSavedDestinations = userSavedDestinationRepository.getUserSavedDestinationByUserId(userId);
            if (userSavedDestinations.isEmpty()){
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = userSavedDestinations.stream().map(UserSavedDestinationResponseDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<Boolean> deleteUserSavedDestinationById(Long id) {
        try {
            userSavedDestinationRepository.deleteUserSavedDestinationById(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,true);
    }
}
