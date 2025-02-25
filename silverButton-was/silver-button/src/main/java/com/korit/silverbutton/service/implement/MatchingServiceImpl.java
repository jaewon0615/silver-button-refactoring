package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.matching.response.MatchingResponseDto;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.user.response.PartnerProfileDto;

import com.korit.silverbutton.entity.Matchings;
import com.korit.silverbutton.entity.MatchingsId;
import com.korit.silverbutton.entity.User;

import com.korit.silverbutton.repository.MatchingRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.MatchingService;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MatchingServiceImpl implements MatchingService {
    private final MatchingRepository matchingRepository;
    private final UserRepository userRepository;

    @Override
    public ResponseDto<List<MatchingResponseDto>> getAllMatchings() {
        try {
            List<Matchings> matchings = matchingRepository.findAll();

            List<MatchingResponseDto> matchingDtos = matchings.stream()
                    .map(matching -> {
                        Long caregiver = matching.getId().getCaregiverId();
                        Long dependent = matching.getId().getDependentId();

                        return new MatchingResponseDto(
                                dependent,
                                caregiver
                        );
                    })
                    .collect(Collectors.toList());

            return ResponseDto.setSuccess("매칭 목록 조회 성공", matchingDtos);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed("매칭 목록 조회 중 오류가 발생했습니다.");
        }
    }

    @Override
    public Boolean getMatchingById(Long userId) {
        try {
            Optional<User> optionalMatching = userRepository.findById(userId);
            Boolean isMatched= userRepository.existsByCaregiverOrDependentId(userId);

            return isMatched;
        } catch (Exception e) {
            e.printStackTrace();
            return true;
        }
    }

    @Override
    public ResponseDto<PartnerProfileDto> getPartner(Long id, String role){
        try{
            Optional<User> optionalMatching = userRepository.findById(id);
            Optional<MatchingsId> matchedId;
            if(optionalMatching.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
            }
            if(role.equals("요양사")){
                matchedId= matchingRepository.findIdByCaregiverId(id);
            }
            else if(role.equals("노인")){
                matchedId= matchingRepository.findIdByDependentId(id);
            }
            else{
                return ResponseDto.setFailed("역할이 없습니다.");
            }
            if (matchedId.isPresent()) {
                Long partnerId = role.equals("요양사") ? matchedId.get().getDependentId() : matchedId.get().getCaregiverId();
                Optional<User> partnerProfile = userRepository.findById(partnerId);
                PartnerProfileDto partnerProfileDto= PartnerProfileDto.builder()
                        .name(partnerProfile.get().getName())
                        .nickname(partnerProfile.get().getNickname())
                        .phone(partnerProfile.get().getPhone())
                        .email(partnerProfile.get().getEmail())
                        .build();
                if (partnerProfile.isPresent()) {
                    return ResponseDto.setSuccess("성공",partnerProfileDto);
                }
            }
            return ResponseDto.setFailed("매칭된 상대가 없습니다.");
        }
        catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed("매칭된 상대가 없습니다.");
        }
    }

    @Override
    public ResponseDto<Void> deleteMatching(Long caregiverId, Long dependentId) {
        try {
            MatchingsId matchingsId = new MatchingsId(dependentId, caregiverId);
            Optional<Matchings> optionalMatching = matchingRepository.findById(matchingsId);

            if (optionalMatching.isEmpty()) {
                return ResponseDto.setFailed("해당 매칭이 존재하지 않습니다.");
            }

            matchingRepository.deleteById(matchingsId);

            return ResponseDto.setSuccess("매칭 삭제가 완료되었습니다.",null);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed("매칭 삭제 중 오류가 발생했습니다.");
        }
    }

    @Override
    public ResponseDto<MatchingResponseDto> createMatching(Long caregiverId, Long dependentId) {
        MatchingResponseDto data= null;
        try {
            User dependent = userRepository.findById(caregiverId).orElse(null);
            User caregiver = userRepository.findById(dependentId).orElse(null);

            boolean exists = matchingRepository.existsById_DependentIdAndId_CaregiverId(dependentId, caregiverId);
            if (exists) {
                return ResponseDto.setFailed("Matching already exists.");
            }

            MatchingsId matchingsId = MatchingsId.builder()
                    .dependentId(dependentId)
                    .caregiverId(caregiverId)
                    .build();

            Matchings matching = Matchings.builder()
                    .id(matchingsId)
                    .build();

            matchingRepository.save(matching);

            data = new MatchingResponseDto(matching);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }

    @Override
    public ResponseDto<List<User>> contractablecaregiver(Long id) {
        Optional<User> optionalMatching = userRepository.findById(id);
        if (optionalMatching.isEmpty()) {
            return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
        }
        List<User> caregivers = userRepository.findNamesByRoleExcludeMatchingCaregiver("요양사");

        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, caregivers);
    }
}
