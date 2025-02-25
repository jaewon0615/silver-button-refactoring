package com.korit.silverbutton.dto.paged.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PagedResponseDto<T> {
    private T content;

    private int currentPage;

    private int totalPages;

    private long totalElements;
}
