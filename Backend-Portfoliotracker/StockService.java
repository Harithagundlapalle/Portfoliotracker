package com.example.portfolio.service;

import com.example.portfolio.entity.Stock;
import com.example.portfolio.repository.StockRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {
    private final StockRepository repository;

    public StockService(StockRepository repository) {
        this.repository = repository;
    }

    public List<Stock> getAllStocks() {
        return repository.findAll();
    }

    public Stock addStock(Stock stock) {
        return repository.save(stock);
    }

    public Stock updateStock(Long id, Stock updatedStock) {
        Stock stock = repository.findById(id).orElseThrow(() -> new RuntimeException("Stock not found"));
        stock.setStockName(updatedStock.getStockName());
        stock.setTicker(updatedStock.getTicker());
        stock.setBuyPrice(updatedStock.getBuyPrice());
        return repository.save(stock);
    }

    public void deleteStock(Long id) {
        repository.deleteById(id);
    }
}
