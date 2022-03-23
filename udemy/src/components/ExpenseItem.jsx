import React from "react";

function ExpenseItem() {
  const expenseTitle = "Car Insurance";
  return (
    <div className="expense-item">
      <div>March 22th,2022</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">$299.34</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
