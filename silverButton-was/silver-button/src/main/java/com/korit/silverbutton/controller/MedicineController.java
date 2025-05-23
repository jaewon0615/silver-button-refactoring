package com.korit.silverbutton.controller;

import com.korit.silverbutton.dto.ResponseDto;

import com.korit.silverbutton.dto.medicines.requset.MedicineRequestDto;
import com.korit.silverbutton.dto.medicines.response.MedicineResponseDto;

import com.korit.silverbutton.service.MedicineService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.MEDICINES;

@RestController
@RequestMapping(MEDICINES)
@RequiredArgsConstructor
public class MedicineController {

    private static final String MEDICINE_POST = "/";
    private static final String MEDICINE_GET = "/";
    private static final String MEDICINE_GET_NAME = "/name/{itemName}";
    private static final String MEDICINE_GET_MEDICINE_ID = "/medicineId/{id}";

    private final MedicineService medicineService;

    @PostMapping(MEDICINE_POST)
    public ResponseEntity<ResponseDto<MedicineResponseDto>> postMedicine(
            @RequestBody MedicineRequestDto dto
    ) {
        ResponseDto<MedicineResponseDto> response = medicineService.postMedicine(dto);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(MEDICINE_GET)
    public ResponseEntity<ResponseDto<List<MedicineResponseDto>>> findAll(
            MedicineRequestDto dto
    ) {
        ResponseDto<List<MedicineResponseDto>> response = medicineService.findAll(dto);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(MEDICINE_GET_NAME)
    public ResponseEntity<ResponseDto<List<MedicineResponseDto>>> getMedicineByItemName(@PathVariable String itemName
    ) {
        ResponseDto<List<MedicineResponseDto>> response = medicineService.getMedicineByItemName(itemName);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(MEDICINE_GET_MEDICINE_ID)
    public ResponseEntity<ResponseDto<MedicineResponseDto>> getMedicineById(@PathVariable Long id
    ) {

        ResponseDto<MedicineResponseDto> response = medicineService.getMedicineById(id);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }
}
