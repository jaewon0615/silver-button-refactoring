package com.korit.silverbutton.dto.inquiryReplies.response;

import com.korit.silverbutton.entity.Inquiries;
import com.korit.silverbutton.entity.InquiryReplies;
import com.korit.silverbutton.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InquiryRepliesResponseDto {
    private Long id;

    private Long userId;

    private Long inquiryId;

    private String password;

    private String title;

    private String content;

    private String reply;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public InquiryRepliesResponseDto(InquiryReplies inquiryReplies) {
        this.id = inquiryReplies.getId();
        this.userId = inquiryReplies.getUser().getId();
        this.inquiryId = inquiryReplies.getInquiries().getId();
        this.password = inquiryReplies.getInquiries().getPassword();
        this.reply = inquiryReplies.getReply();
        this.createdAt = inquiryReplies.getCreatedAt();
        this.updatedAt = inquiryReplies.getUpdatedAt();
        this.title = inquiryReplies.getInquiries().getTitle();
        this.content = inquiryReplies.getInquiries().getContent();

    }
}
