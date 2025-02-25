package com.korit.silverbutton.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "health_magazine")
@Builder
public class HealthMagazine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "thumbnail_image_url")
    private String thumbnailImageUrl;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = " published_date")
    private LocalDateTime publishedDate;

    @Column(name = "source")
    private String source;

    @Column(name = "view_count")
    private int viewCount;
}
