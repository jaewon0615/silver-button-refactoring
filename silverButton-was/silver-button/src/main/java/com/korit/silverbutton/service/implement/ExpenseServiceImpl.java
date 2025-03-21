package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.exercise.response.ExerciseResponseDto;
import com.korit.silverbutton.dto.expense.request.ExpenseRequestDto;
import com.korit.silverbutton.dto.expense.response.ExpenseResponseDto;
import com.korit.silverbutton.entity.Expense;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.ExpenseRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.ExpenseService;
import jakarta.transaction.Transactional;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class ExpenseServiceImpl implements ExpenseService {
    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;

    @Override
    public ResponseDto<ExpenseResponseDto> postExpense(Long userId, ExpenseRequestDto dto) {
        ExpenseResponseDto data = null;
        LocalDate date = LocalDate.now();
        String category = dto.getCategory();
        Date paymentDate = dto.getPaymentDate();
        String description = dto.getDescription();
        BigDecimal amount = dto.getAmount();
        String notes = dto.getNotes();
        String paymentMethod = dto.getPaymentMethod();
        LocalDateTime createdAt = LocalDateTime.now();
        try {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));
            Expense expense = Expense.builder()
                    .user(user)
                    .category(category)
                    .paymentDate(paymentDate)
                    .description(description)
                    .amount(amount)
                    .notes(notes)
                    .paymentMethod(paymentMethod)
                    .createdAt(createdAt)
                    .createdAt(date.atStartOfDay())
                    .build();

            expenseRepository.save(expense);
            data = new ExpenseResponseDto(expense);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }

    @Override
    public ResponseDto<List<ExpenseResponseDto>> getExpenseByUserId(Long userId) {
        List<ExpenseResponseDto> data = null;
        try {
            List<Expense> expenses = expenseRepository.getExpenseByUserId(userId);
            if (expenses.isEmpty()){
                return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
            }
            data = expenses.stream().map(ExpenseResponseDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS,data);
    }
}
