package com.korit.silverbutton.dto.inquiries.request;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InquiriesRequestDto {
    private String title;

    private String content;

}
