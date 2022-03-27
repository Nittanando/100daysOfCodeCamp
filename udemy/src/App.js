import React from "react";
import DateObject from "react-date-object";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: "299",
      date: new DateObject("2020 8 21"),
    },
    { title: "House Rent", amount: "200", date: new DateObject("2020 8 21") },
    {
      title: "Medicine Cost",
      amount: "100",
      date: new DateObject("2020 8 21"),
    },
  ];

  return (
    <div className="App">
      <h2>Expense Chart</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
