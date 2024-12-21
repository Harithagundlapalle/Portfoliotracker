import React, { useEffect, useState } from "react";
import axios from "axios";

const StockTable = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    const response = await axios.get("http://localhost:8080/stocks");
    setStocks(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/stocks/${id}`);
    fetchStocks();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Buy Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock) => (
          <tr key={stock.id}>
            <td>{stock.stockName}</td>
            <td>{stock.ticker}</td>
            <td>{stock.buyPrice}</td>
            <td>
              <button onClick={() => handleDelete(stock.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
