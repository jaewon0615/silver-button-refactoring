package com.korit.silverbutton.dto.boardlike.response;

import com.korit.silverbutton.dto.board.response.BoardResponseDto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BoardLikeResponseDto extends BoardResponseDto {
    private Long id;

    private Long boardId;

    private Long likerId;

    private int likes;

    public BoardLikeResponseDto(Long boardId, int likes) {
        this.boardId = boardId;
        this.likes = likes;
    }
}
