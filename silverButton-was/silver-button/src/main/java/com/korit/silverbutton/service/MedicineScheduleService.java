package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.medicine.response.MedicineScheduleResponseDto;

import com.korit.silverbutton.dto.medicine.requset.MedicineScheduleRequestDto;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MedicineScheduleService {
    ResponseDto<MedicineScheduleResponseDto> postMedicineByUserId(Long id, MedicineScheduleRequestDto dto);

    ResponseDto<List<MedicineScheduleResponseDto>> getMedicineAllByUserId(String userId);

    ResponseDto<MedicineScheduleResponseDto> getMedicineByUserIdAndItemSeq(String userId, Long itemSeq);

    ResponseDto<Boolean> deleteMedicineByUserIdAndItemSeq(String userId, Long itemSeq);
}
