import { useSelector } from "react-redux";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
  const allExpenses = useSelector((state) => state.expensesR.expenses);
  return <ExpensesOutput expenses={allExpenses} expensePeriod="Total" fallback="No registered expense found!" />;
}

export default AllExpenses;
