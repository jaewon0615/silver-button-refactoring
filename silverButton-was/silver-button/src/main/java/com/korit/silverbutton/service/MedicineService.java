package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.medicines.response.MedicineResponseDto;

import com.korit.silverbutton.dto.medicines.requset.MedicineRequestDto;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MedicineService {
    ResponseDto<MedicineResponseDto> postMedicine(MedicineRequestDto dto);

    ResponseDto<List<MedicineResponseDto>> findAll(MedicineRequestDto dto);

    ResponseDto<List<MedicineResponseDto>> getMedicineByItemName(String itemName);

    ResponseDto<MedicineResponseDto> getMedicineById(Long id);
}
