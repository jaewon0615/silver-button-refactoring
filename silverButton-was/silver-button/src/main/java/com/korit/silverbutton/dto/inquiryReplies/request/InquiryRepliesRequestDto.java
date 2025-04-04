package com.korit.silverbutton.dto.inquiryReplies.request;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InquiryRepliesRequestDto {
    private Long inquiryId;

    private String reply;

    private String password;

}
