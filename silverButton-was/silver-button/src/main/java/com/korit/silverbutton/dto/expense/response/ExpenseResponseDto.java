package com.korit.silverbutton.dto.expense.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.korit.silverbutton.entity.Expense;
import com.korit.silverbutton.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseResponseDto {
    private Long id;

    private Long userId;

    private Date paymentDate;

    private String category;

    private String description;

    private BigDecimal amount;

    private String paymentMethod;

    private String notes;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public ExpenseResponseDto(Expense expense) {
        this.id = expense.getId();
        this.userId = expense.getUser().getId();
        this.paymentDate = expense.getPaymentDate();
        this.category = expense.getCategory();
        this.description = expense.getDescription();
        this.amount = expense.getAmount();
        this.paymentMethod = expense.getPaymentMethod();
        this.notes = expense.getNotes();
        this.createdAt = expense.getCreatedAt();
        this.updatedAt = expense.getUpdatedAt();
    }
}
