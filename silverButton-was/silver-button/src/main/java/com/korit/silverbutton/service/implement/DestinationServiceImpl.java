package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.dependent.request.DependentRequestDto;
import com.korit.silverbutton.dto.dependent.response.DependentResponseDto;
import com.korit.silverbutton.dto.detination.request.DestinationRequestDto;
import com.korit.silverbutton.dto.detination.response.DestinationResponseDto;
import com.korit.silverbutton.entity.Destination;
import com.korit.silverbutton.repository.DestinationRepository;
import com.korit.silverbutton.service.DestinationService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class DestinationServiceImpl implements DestinationService {
    private final DestinationRepository destinationRepository;

    @Override
    public ResponseDto<DestinationResponseDto> postDestination(DestinationRequestDto dto) {
        DestinationResponseDto data = null;
        LocalDate date = LocalDate.now();
        String name = dto.getName();
        String category = dto.getCategory();
        String description = dto.getDescription();
        String location = dto.getLocation();
        String address = dto.getAddress();
        String openingHours = dto.getOpeningHours();
        String closingHours = dto.getClosingHours();
        String phoneNumber = dto.getPhoneNumber();
        String website = dto.getWebsite();
        String ticketPrice = dto.getTicketPrice();
        String facilities = dto.getFacilities();
        BigDecimal rating = dto.getRating();
        String ImageUrl = dto.getImageUrl();
        String publicTransportation = dto.getPublicTransportation();
        LocalDateTime createdAt = LocalDateTime.now();
        try {
            Destination destination = Destination.builder()
                    .name(name)
                    .category(category)
                    .description(description)
                    .location(location)
                    .address(address)
                    .openingHours(openingHours)
                    .closingHours(closingHours)
                    .phoneNumber(phoneNumber)
                    .website(website)
                    .ticketPrice(ticketPrice)
                    .facilities(facilities)
                    .rating(rating)
                    .ImageUrl(ImageUrl)
                    .createdAt(createdAt)
                    .publicTransportation(publicTransportation)
                    .build();

            destinationRepository.save(destination);
            data = new DestinationResponseDto(destination);
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<DestinationResponseDto> getDestinationById(Long id) {
        DestinationResponseDto data = null;
        try {
            Optional<Destination> optionalDestination = destinationRepository.getDestinationById(id);
            if (optionalDestination.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            Destination destination = optionalDestination.get();
            destinationRepository.save(destination);
            data = new DestinationResponseDto(destination);
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<DestinationResponseDto>> getDestinationByLocation(String location) {
        List<DestinationResponseDto> data = null;
        try {
            List<Destination> destinations = destinationRepository.getDestinationsByLocation(location);
            if (destinations.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = destinations.stream().map(DestinationResponseDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }


    @Override
    public ResponseDto<List<DestinationResponseDto>> findAll(DestinationRequestDto dto) {
        List<DestinationResponseDto> data = null;
        try {
            List<Destination> destinations = destinationRepository.findAll();
            if (destinations.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = destinations.stream().map(DestinationResponseDto::new).collect(Collectors.toList());
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<DestinationResponseDto>> getDestinationByRating(DestinationRequestDto dto) {
        List<DestinationResponseDto> data = null;
        try {
            BigDecimal rating = new BigDecimal("4.35");
            List<Destination> destinations = destinationRepository.getDestinationByRating(rating);
            if (destinations.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = destinations.stream().map(DestinationResponseDto::new).collect(Collectors.toList());
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<Boolean> deleteDestinationById(Long id) {
        try {
            destinationRepository.deleteById(id);
        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,true);
    }
}
