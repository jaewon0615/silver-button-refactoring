package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.medicines.response.MedicineResponseDto;

import com.korit.silverbutton.dto.medicines.requset.MedicineRequestDto;


import com.korit.silverbutton.entity.Medicine;

import com.korit.silverbutton.repository.MedicineRepository;
import com.korit.silverbutton.service.MedicineService;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MedicineServiceImpl implements MedicineService {
    private final MedicineRepository medicineRepository;
    @Override
    public ResponseDto<MedicineResponseDto> postMedicine(MedicineRequestDto dto) {
        MedicineResponseDto data = null;
        String itemName = dto.getItemName();
        String efcyQesitm = dto.getEfcyQesitm();
        Long itemSeq = dto.getItemSeq();
        String useMethodQesitm = dto.getUseMethodQesitm();
        String atpnQesitm = dto.getAtpnQesitm();
        String seQesitm = dto.getSeQesitm();
        String depositMethodQesitm = dto.getDepositMethodQesitm();
        String intrcQesitm = dto.getIntrcQesitm();
        String medicineImage = dto.getMedicineImage();
        try {
            Medicine medicine = Medicine.builder()
                    .itemName(itemName)
                    .itemSeq(itemSeq)
                    .useMethodQesitm(useMethodQesitm)
                    .atpnQesitm(atpnQesitm)
                    .seQesitm(seQesitm)
                    .depositMethodQesitm(depositMethodQesitm)
                    .intrcQesitm(intrcQesitm)
                    .medicineImage(medicineImage)
                    .efcyQesitm(efcyQesitm)
                    .build();
            medicineRepository.save(medicine);
            data = new MedicineResponseDto(medicine);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.POST_MEDICINE_SCHEDULE_SUCCESS, data);
    }

    @Override
    public ResponseDto<List<MedicineResponseDto>> findAll(MedicineRequestDto dto) {
        List<MedicineResponseDto> data = null;
        try {
            List<Medicine> medicines = medicineRepository.findAll();
            if (medicines.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.HEALTH_MAGAZINE_NOT_FOUND); //
            }
            data = medicines.stream().map(MedicineResponseDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.GET_ALL_HEALTH_MAGAZINE_SUCCESS, data);

    }

    @Override
    public ResponseDto<List<MedicineResponseDto>> getMedicineByItemName(String itemName) {

            List<MedicineResponseDto> data = null;
            try {
                Optional<List<Medicine>> optionalMedicines = medicineRepository.getMedicineByItemName(itemName);
                if (optionalMedicines.isEmpty()) {
                    return ResponseDto.setFailed(ResponseMessage.MEDICINE_SCHEDULE_NOT_FOUND);
                }
                List<Medicine> medicines = optionalMedicines.get();

                data = medicines.stream().map(MedicineResponseDto::new).collect(Collectors.toList());
            } catch (Exception e) {
                e.printStackTrace();
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            return ResponseDto.setSuccess(ResponseMessage.GET_MEDICINE_SCHEDULE_SUCCESS, data);
        }

    @Override
    public ResponseDto<MedicineResponseDto> getMedicineById(Long id) {
        MedicineResponseDto data = null;
        try {
            Optional<Medicine> optionalMedicine = medicineRepository.getMedicineById(id);
            if (optionalMedicine.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.MEDICINE_SCHEDULE_NOT_FOUND);
            }
            Medicine medicine = optionalMedicine.get();
            data = new MedicineResponseDto(medicine);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.GET_MEDICINE_SCHEDULE_SUCCESS, data);
    }
}


