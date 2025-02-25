package com.korit.silverbutton.service;

import com.korit.silverbutton.common.constant.ResponseMessage;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.schedule.response.ScheduleCreateResponseDto;
import com.korit.silverbutton.dto.schedule.response.ScheduleResponseDto;

import com.korit.silverbutton.dto.schedule.request.ScheduleCreateRequestDto;

import com.korit.silverbutton.entity.Schedules;
import com.korit.silverbutton.repository.ScheduleCreateRepository;
import com.korit.silverbutton.repository.ScheduleRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ScheduleService {
    private final ScheduleRepository scheduleRepository;
    private final ScheduleCreateRepository scheduleCreateRepository;


    public ResponseDto<List<ScheduleResponseDto>> getScheduleByDependentIdAndDate(String userId, int year, int month){
        List<ScheduleResponseDto> data= null;
        try{
            List<Object[]> results=
                    scheduleRepository.findSchedulesByDependentIdAndDate(userId, year, month);
            data= results.stream()
                    .map(result-> new ScheduleResponseDto((Long)result[0], (String)result[2], (String)result[1])).collect(Collectors.toList());
        }
        catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }

    public ResponseDto<List<ScheduleResponseDto>> getScheduleForToday(String userId) {
        List<ScheduleResponseDto> data = null;
        try {
            List<Object[]> results = scheduleRepository.findSchedulesForToday(userId);
            data = results.stream()
                    .map(result -> new ScheduleResponseDto((Long) result[0], (String) result[2], (String) result[1]))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }

    public ResponseDto<ScheduleCreateResponseDto> createScheduleSelf(ScheduleCreateRequestDto dto, Long userId){
        ScheduleCreateResponseDto data= null;
        try{
            Schedules schedule= new Schedules(null, userId, dto.getScheduleDate(), dto.getTask());
            scheduleCreateRepository.save(schedule);
            data=new ScheduleCreateResponseDto(schedule);
            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    public ResponseDto<ScheduleCreateResponseDto> createScheduleDependent(ScheduleCreateRequestDto dto, Long userId) {
        try{
            Long dependentId= scheduleRepository.findDependentIdsByCaregiverId(userId);
            if(dependentId!= null){
                return createScheduleSelf(dto, dependentId);
            }
            else{
                return ResponseDto.setFailed("피부양자가 없습니다.");
            }
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    @Transactional
    public ResponseDto<Void> deleteSchedule(Long id, Long userId) {
        try{
            if(!scheduleCreateRepository.existsById(id)){
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_POST);
            }
            scheduleCreateRepository.deleteByIdAndDependentId(id, userId);
            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, null);
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    public ResponseDto<ScheduleCreateResponseDto> updateSchedule(Long id, ScheduleCreateRequestDto dto, Long userId) {
        try{
            boolean check= scheduleCreateRepository.existsByIdAndDependentId(id, userId);
            if (check) {
                Schedules schedule = scheduleCreateRepository.findByIdAndDependentId(id, userId);

                schedule.setTask(dto.getTask());

                scheduleCreateRepository.save(schedule);

                ScheduleCreateResponseDto responseDto = new ScheduleCreateResponseDto(schedule);
                return ResponseDto.setSuccess(ResponseMessage.SUCCESS, responseDto);
            } else {
                return ResponseDto.setFailed("해당 스케줄이 존재하지 않습니다. 다시 시도해주세요");
            }
        }
        catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }
}
