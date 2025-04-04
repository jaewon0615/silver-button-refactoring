package com.korit.silverbutton.entity;

import com.korit.silverbutton.enums.InquiryStatus;
import jakarta.persistence.*;
import lombok.*;

import java.security.Timestamp;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "inquiries")
@Builder
public class Inquiries {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String title;

    private String content;

    private String password;

    private InquiryStatus status;

    @PrePersist
    public void prePersist() {
        if (this.status == null) {
            this.status = InquiryStatus.PENDING;
        }
    }

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
