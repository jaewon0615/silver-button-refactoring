package com.korit.silverbutton.dto.expense.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseRequestDto {
    private Date paymentDate;

    private String category;

    private String description;

    private BigDecimal amount;

    private String paymentMethod;

    private String notes;
}
