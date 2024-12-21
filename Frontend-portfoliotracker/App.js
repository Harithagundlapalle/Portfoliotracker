import React from "react";
import Dashboard from "./components/Dashboard";
import StockForm from "./components/StockForm";
import StockTable from "./components/StockTable";

const App = () => {
  return (
    <div>
      <h1>Portfolio Tracker</h1>
      <Dashboard />
      <StockForm />
      <StockTable />
    </div>
  );
};

export default App;
