package com.example.portfolio.controller;

import com.example.portfolio.entity.Stock;
import com.example.portfolio.service.StockService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stocks")
public class StockController {
    private final StockService service;

    public StockController(StockService service) {
        this.service = service;
    }

    @GetMapping
    public List<Stock> getAllStocks() {
        return service.getAllStocks();
    }

    @PostMapping
    public Stock addStock(@RequestBody Stock stock) {
        return service.addStock(stock);
    }

    @PutMapping("/{id}")
    public Stock updateStock(@PathVariable Long id, @RequestBody Stock updatedStock) {
        return service.updateStock(id, updatedStock);
    }

    @DeleteMapping("/{id}")
    public void deleteStock(@PathVariable Long id) {
        service.deleteStock(id);
    }
}
