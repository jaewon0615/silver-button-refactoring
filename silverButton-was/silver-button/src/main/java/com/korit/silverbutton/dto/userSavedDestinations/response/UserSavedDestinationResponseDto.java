package com.korit.silverbutton.dto.userSavedDestinations.response;

import com.korit.silverbutton.entity.Destination;
import com.korit.silverbutton.entity.UserSavedDestination;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSavedDestinationResponseDto {
    private Long id;

    private Long userId;

    private Long destinationId;

    private String message;

    private String name;

    private String category;

    private String description;

    private String location;

    private String address;

    private String openingHours;

    private String closedHours;

    private String publicTransportation;

    private int viewCount;

    private String city;

    private String phoneNumber;

    private String website;

    private String ticketPrice;

    private String facilities;

    private BigDecimal rating;

    private String ImageUrl;


    public UserSavedDestinationResponseDto(UserSavedDestination userSavedDestination) {
        this.id = userSavedDestination.getId();
        this.userId = userSavedDestination.getUser().getId();
        this.destinationId = userSavedDestination.getDestination().getId();
        this.name = userSavedDestination.getDestination().getName();
        this.location = userSavedDestination.getDestination().getLocation();
        this.address = userSavedDestination.getDestination().getAddress();
        this.openingHours = userSavedDestination.getDestination().getOpeningHours();
        this.closedHours = userSavedDestination.getDestination().getClosingHours();
        this.publicTransportation = userSavedDestination.getDestination().getPublicTransportation();
        this.viewCount = userSavedDestination.getDestination().getViewCount();
        this.city = userSavedDestination.getDestination().getCity();
        this.phoneNumber = userSavedDestination.getDestination().getPhoneNumber();
        this.website = userSavedDestination.getDestination().getWebsite();
        this.ticketPrice = userSavedDestination.getDestination().getTicketPrice();
        this.facilities = userSavedDestination.getDestination().getFacilities();
        this.rating = userSavedDestination.getDestination().getRating();
        this.description = userSavedDestination.getDestination().getDescription();
        this.ImageUrl = userSavedDestination.getDestination().getImageUrl();
    }


}
