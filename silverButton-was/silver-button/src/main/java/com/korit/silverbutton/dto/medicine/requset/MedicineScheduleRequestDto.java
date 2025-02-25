package com.korit.silverbutton.dto.medicine.requset;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicineScheduleRequestDto {

        private Long id;

        private String userId;

        private Long itemSeq;

        private String itemName;

        private String efcyQesitm;

        private String useMethodQesitm;

        private String atpnQesitm;

        private String seQesitm;

        private String depositMethodQesitm;

        private String intrcQesitm;

        private String medicineImage;
}
