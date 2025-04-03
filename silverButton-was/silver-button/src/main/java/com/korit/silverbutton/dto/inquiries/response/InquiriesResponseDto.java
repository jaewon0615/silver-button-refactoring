package com.korit.silverbutton.dto.inquiries.response;


import com.korit.silverbutton.entity.Inquiries;
import com.korit.silverbutton.enums.InquiryStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InquiriesResponseDto {
    private Long id;

    private Long userId;

    private String title;

    private String content;

    private InquiryStatus status;

    private LocalDateTime createdAt;

    public InquiriesResponseDto(Inquiries inquiries) {
        this.id = inquiries.getId();
        this.userId = inquiries.getUser().getId();
        this.title = inquiries.getTitle();
        this.content = inquiries.getContent();
        this.createdAt = inquiries.getCreatedAt();
        this.status = inquiries.getStatus();
    }
}
