package com.example.portfolio.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String stockName;
    private String ticker;
    private int quantity = 1;
    private double buyPrice;
}
