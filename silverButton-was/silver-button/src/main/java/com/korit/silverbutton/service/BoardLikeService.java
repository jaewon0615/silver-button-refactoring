package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.boardlike.response.BoardLikeResponseDto;

import com.korit.silverbutton.dto.boardlike.request.BoardLikeRequestDto;

import com.korit.silverbutton.entity.Board;
import com.korit.silverbutton.entity.User;

import jakarta.validation.Valid;

public interface BoardLikeService {
    User findUserById(Long likerId);

    Board findBoardById(Long boardId);

    ResponseDto<BoardLikeResponseDto> toggleLike(Long userId, @Valid BoardLikeRequestDto dto);
}
