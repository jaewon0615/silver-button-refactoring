package com.korit.silverbutton.controller;

import com.korit.silverbutton.common.constant.ApiMappingPattern;

import com.korit.silverbutton.dto.matching.response.MatchingResponseDto;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.user.response.PartnerProfileDto;

import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.MatchingService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiMappingPattern.MATCHING)
@RequiredArgsConstructor
public class MatchingController {
    private final MatchingService matchingService;

    @GetMapping("/matching-all")
    public ResponseEntity<ResponseDto<List<MatchingResponseDto>>> getAllMatchings(
    ) {
        ResponseDto<List<MatchingResponseDto>> response = matchingService.getAllMatchings();
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping("/search-caregiver")
    public ResponseEntity<ResponseDto<List<User>>> getAllContractAble(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<List<User>> response= matchingService.contractablecaregiver(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping("matching-any")
    public Boolean getMatchingById(
            @AuthenticationPrincipal PrincipalUser principalUser
    ) {
        return matchingService.getMatchingById(principalUser.getId());
    }

    @GetMapping("/matching-partner")
    public ResponseEntity<ResponseDto<PartnerProfileDto>> getPartner(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<PartnerProfileDto> response= matchingService.getPartner(principalUser.getId(), principalUser.getRole());
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @PostMapping("/matching-make")
    public ResponseEntity<ResponseDto<MatchingResponseDto>> createMatching(
            @RequestParam Long id,
            @AuthenticationPrincipal PrincipalUser principalUser
    ) {
        try{
            ResponseDto<MatchingResponseDto> response = matchingService.createMatching(id, principalUser.getId());
            HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
            return ResponseEntity.status(status).body(response);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ResponseDto.setFailed("Internal server error"));
        }
    }

    @DeleteMapping("/matching-delete")
    public ResponseEntity<ResponseDto<Void>> deleteMatching(
            @RequestParam Long id,
            @AuthenticationPrincipal PrincipalUser principalUser
    ) {
        Long userId = principalUser.getId();

        ResponseDto<Void> response = matchingService.deleteMatching(id, userId);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }
}
