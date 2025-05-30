package com.korit.silverbutton.entity;

import jakarta.persistence.*;
import lombok.*;

import com.korit.silverbutton.entity.Inquiries;

import javax.net.ssl.SSLSession;
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
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id", nullable = false)
    private Inquiries inquiries;

    private String reply;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}
