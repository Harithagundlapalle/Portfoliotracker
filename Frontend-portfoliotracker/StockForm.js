import React, { useState } from "react";
import axios from "axios";

const StockForm = () => {
  const [form, setForm] = useState({ stockName: "", ticker: "", buyPrice: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/stocks", form);
    setForm({ stockName: "", ticker: "", buyPrice: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Stock Name"
        value={form.stockName}
        onChange={(e) => setForm({ ...form, stockName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Ticker"
        value={form.ticker}
        onChange={(e) => setForm({ ...form, ticker: e.target.value })}
      />
      <input
        type="number"
        placeholder="Buy Price"
        value={form.buyPrice}
        onChange={(e) => setForm({ ...form, buyPrice: e.target.value })}
      />
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default StockForm;
