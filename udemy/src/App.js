import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 299,
      date: new Date(2020, 7, 20),
    },
    { id: "e2", title: "House Rent", amount: 200, date: new Date(2020, 4, 1) },
    {
      id: "e3",
      title: "Medicine Cost",
      amount: 100,
      date: new Date(2020, 3, 23),
    },
    {
      id: "e5",
      title: "Furniture Cost",
      amount: 300,
      date: new Date(2020, 9, 23),
    },
  ];

  return (
    <div className="App">
      <h2>Expense Tracker Application</h2>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
