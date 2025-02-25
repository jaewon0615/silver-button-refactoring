package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.board.response.BoardResponseDto;
import com.korit.silverbutton.dto.board.response.BoardUpdateResponseDto;
import com.korit.silverbutton.dto.paged.response.PagedResponseDto;

import com.korit.silverbutton.dto.board.request.BoardRequestDto;

import jakarta.validation.Valid;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface BoardService {
    ResponseDto<BoardResponseDto> createBoard(Long userId, BoardRequestDto dto, List<MultipartFile> images);

    ResponseDto<PagedResponseDto<List<BoardResponseDto>>> getAllBoards(int page, int size);

    ResponseDto<PagedResponseDto<List<BoardResponseDto>>> getBoardByTitle(String keyword, int page, int size);

    ResponseDto<PagedResponseDto<List<BoardResponseDto>>> getBoardByUserName(String name, int page, int size);

    ResponseDto<BoardUpdateResponseDto> updateBoard(Long userId, Long id, @Valid BoardRequestDto dto, List<MultipartFile> images);

    ResponseDto<Void> deleteBoard(Long userId, Long id);

    ResponseDto<BoardResponseDto> getBoardAndIncreaseViews(Long id);

}
