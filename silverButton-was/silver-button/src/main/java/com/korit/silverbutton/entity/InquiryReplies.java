package com.korit.silverbutton.entity;

import jakarta.persistence.*;
import lombok.*;

import com.korit.silverbutton.entity.Inquiries;

import java.time.LocalDateTime;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "inquiry_replies")
@Builder
public class InquiryReplies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_id", nullable = false)
    private User admin;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id", nullable = false)
    private Inquiries Inquiries;

    private String reply;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;



}
