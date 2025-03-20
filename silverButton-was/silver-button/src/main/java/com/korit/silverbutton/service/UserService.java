package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.user.response.UserProfileDto;
import com.korit.silverbutton.dto.user.response.UserResponseDto;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface UserService {

    // 전체 사용자 목록 조회
    ResponseDto<List<UserResponseDto>> getAllUsers(String userId);

    // 특정 사용자 프로필 조회
    ResponseDto<UserProfileDto> getUser(String userId);

    // 비밀번호 변경
    ResponseDto<UserProfileDto> updatePassword(String userId, String currentPassword, String newPassword);

    // 현재 비밀번호 확인
    boolean verifyPassword(String userId, String currentPassword);

    // 사용자 삭제
    ResponseDto<Void> deleteUser(String userId);

    // 사용자 정보 수정
    ResponseDto<UserProfileDto> updateUser(String userId, UserProfileDto dto);

    // 프로필 이미지 파일 업로드
    ResponseDto<String> uploadFile(String userId, MultipartFile file);

    // 파일 삭제
    ResponseDto<Void> deleteFile(String filePath);

    // 프로필 이미지 가져오기
    ResponseDto<String> getProfileImg(String userId);

    // 2차 비밀번호 설정 (기존 비밀번호가 있을 경우에만)
    ResponseDto<Void> setSecondPassword(Long userId, String secondPassword);

    // 2차 비밀번호 등록 (새로운 2차 비밀번호 등록)
    ResponseDto<String> registerSecondPassword(Long userId, String secondPassword);

    // 2차 비밀번호 확인
    boolean verifySecondPassword(Long userId, String secondPassword);
}
