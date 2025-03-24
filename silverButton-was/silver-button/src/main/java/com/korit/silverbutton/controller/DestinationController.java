package com.korit.silverbutton.controller;

import com.korit.silverbutton.common.constant.ApiMappingPattern;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.detination.request.DestinationRequestDto;
import com.korit.silverbutton.dto.detination.response.DestinationResponseDto;
import com.korit.silverbutton.service.DestinationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiMappingPattern.DESTINATION)
@RequiredArgsConstructor
public class DestinationController {
    private final DestinationService destinationService;

    private static final String DESTINATION_POST = "/";
    private static final String DESTINATION_GET = "id/{id}";
    private static final String DESTINATION_GET_ALL = "/";
    private static final String DESTINATION_GET_LOCATION = "location/{location}";
    private static final String DESTINATION_DELETE = "delete/{id}";
    private static final String DESTINATION_RATING = "/rating";

    @PostMapping(DESTINATION_POST)
    public ResponseEntity<ResponseDto<DestinationResponseDto>> postDestination(
            @RequestBody DestinationRequestDto dto
    ){
        ResponseDto<DestinationResponseDto> response = destinationService.postDestination(dto);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(DESTINATION_GET)
    public ResponseEntity<ResponseDto<DestinationResponseDto>> getDestinationById(@PathVariable Long id){
        ResponseDto<DestinationResponseDto> response = destinationService.getDestinationById(id);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(DESTINATION_GET_LOCATION)
    public ResponseEntity<ResponseDto<List<DestinationResponseDto>> >getDestinationByLocation(@PathVariable String location){
        ResponseDto<List<DestinationResponseDto>> response = destinationService.getDestinationByLocation(location);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(DESTINATION_GET_ALL)
    public ResponseEntity<ResponseDto<List<DestinationResponseDto>>> findAll(
            DestinationRequestDto dto
    ){
        ResponseDto<List<DestinationResponseDto>> response = destinationService.findAll(dto);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(DESTINATION_RATING)
    public ResponseEntity<ResponseDto<List<DestinationResponseDto>>> getDestinationByRating(
            DestinationRequestDto dto
    ){
        ResponseDto<List<DestinationResponseDto>> response = destinationService.getDestinationByRating(dto);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(DESTINATION_DELETE)
    public ResponseEntity<ResponseDto<Boolean>> deleteDestinationById(@PathVariable Long id){
        ResponseDto<Boolean> response = destinationService.deleteDestinationById(id);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }




}
