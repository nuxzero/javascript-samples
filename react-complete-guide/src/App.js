import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 3, 8),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 295.75,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 295.75,
      date: new Date(2021, 2, 28),
    },
  ];
  return <Expenses items={expenses} />;
}

export default App;
