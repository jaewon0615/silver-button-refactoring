package com.korit.silverbutton.dto.userSavedDestinations.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSavedDestinationRequestDto {
    private Long userId;
    private Long destinationId;
}
