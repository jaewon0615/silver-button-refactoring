package com.korit.silverbutton.controller;

import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.dto.expense.request.ExpenseRequestDto;
import com.korit.silverbutton.dto.expense.response.ExpenseResponseDto;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.ExpenseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.korit.silverbutton.common.constant.ApiMappingPattern.Exercise;
import static com.korit.silverbutton.common.constant.ApiMappingPattern.Expense;

@RestController
@RequestMapping(Expense)
@RequiredArgsConstructor
public class ExpenseController {
    private final ExpenseService expenseService;

    private static final String EXPENSE_POST = "/";
    private static final String EXPENSE_GET = "/{userId}";

    @PostMapping(EXPENSE_POST)
    public ResponseEntity<ResponseDto<ExpenseResponseDto>> postExpense(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody ExpenseRequestDto dto
            ){
        ResponseDto<ExpenseResponseDto> response = expenseService.postExpense(principalUser.getId(),dto);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(EXPENSE_GET)
    public ResponseEntity<ResponseDto<List<ExpenseResponseDto>>> getExpenseByUserId(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        ResponseDto<List<ExpenseResponseDto>> response = expenseService.getExpenseByUserId(principalUser.getId());
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }





}
