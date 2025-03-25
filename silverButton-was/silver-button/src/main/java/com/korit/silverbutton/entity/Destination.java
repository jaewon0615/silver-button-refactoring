package com.korit.silverbutton.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "destination")
@Builder
public class Destination {

    // 아이디
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 여행지 이름
    private String name;

    // 여향지 카테고리
    private String category;

    // 여행지 설명
    private String description;

    // 여행지의 위치
    private String location;

    // 여행지의 세부 주소
    private String address;

    // 여행지 오픈 시간
    private String openingHours;

    // 여행지 마감 시간
    private String closingHours;

    private String publicTransportation;

    private int viewCount;

    private String city;

    // 여행지 번호
    private String phoneNumber;

    // 여행지 웹 사이트
    private String website;

    // 여행지 티켓 가격
    private String ticketPrice;

    // 여행지 제공 시설
    private String facilities;

    // 여행지 평점
    private BigDecimal rating;

    // 여행지 이미지 주소
    private String ImageUrl;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
