package com.korit.silverbutton.service;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.exercise.response.ExerciseResponseDto;
import com.korit.silverbutton.dto.expense.request.ExpenseRequestDto;
import com.korit.silverbutton.dto.expense.response.ExpenseResponseDto;

import java.util.List;

public interface ExpenseService {
    ResponseDto<ExpenseResponseDto> postExpense(Long userId, ExpenseRequestDto dto);
    ResponseDto<List<ExpenseResponseDto>> getExpenseByUserId(Long userId);
    ResponseDto<Boolean> deleteExpenseById(Long id);

}
