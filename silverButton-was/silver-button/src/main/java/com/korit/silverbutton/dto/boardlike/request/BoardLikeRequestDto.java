package com.korit.silverbutton.dto.boardlike.request;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BoardLikeRequestDto {
    private Long id;

    private Long boardId;
}
