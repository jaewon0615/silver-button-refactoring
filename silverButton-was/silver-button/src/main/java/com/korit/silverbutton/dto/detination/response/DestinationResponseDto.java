package com.korit.silverbutton.dto.detination.response;

import com.korit.silverbutton.entity.Destination;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DestinationResponseDto {
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

    // 여행지 번호
    private String phoneNumber;

    // 여행지 웹 사이트
    private String website;

    // 여행지 티켓 가격
    private String ticketPrice;

    // 여행지 제공 시설
    private String facilities;

    private String publicTransportation;

    // 여행지 평점
    private BigDecimal rating;

    private int viewCount;

    private String city;

    // 여행지 이미지 주소
    private String ImageUrl;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public DestinationResponseDto(Destination destination) {
        this.id = destination.getId();
        this.name = destination.getName();
        this.category = destination.getCategory();
        this.description = destination.getDescription();
        this.location = destination.getLocation();
        this.address = destination.getAddress();
        this.openingHours = destination.getOpeningHours();
        this.closingHours = destination.getClosingHours();
        this.phoneNumber = destination.getPhoneNumber();
        this.website = destination.getWebsite();
        this.ticketPrice = destination.getTicketPrice();
        this.facilities = destination.getFacilities();
        this.rating = destination.getRating();
        this.ImageUrl = destination.getImageUrl();
        this.createdAt = destination.getCreatedAt();
        this.updatedAt = destination.getUpdatedAt();
        this.publicTransportation = destination.getPublicTransportation();
        this.viewCount = destination.getViewCount();
        this.city = destination.getCity();
    }
}
