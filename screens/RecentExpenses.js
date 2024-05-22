import { useDispatch, useSelector } from "react-redux";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utilities/date";
import { useEffect } from "react";
import { fetchExpenses } from "../utilities/http";
import { setExpenses } from "../store/redux/expensesReducer";

function RecentExpenses() {
  const dispatch = useDispatch();
  const allExpenses = useSelector((state) => state.expensesR.expenses);

  useEffect(() => {
    async function getExpenses(){
      const expenses = await fetchExpenses();
      dispatch(setExpenses(expenses));
    }

    getExpenses();
  }, []);

  const recentExpenses = allExpenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    const expenseDate = new Date(expense.date);
    return (expenseDate >= date7DaysAgo) && (expenseDate <= today);
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensePeriod="Last 7 days" fallback="No registered expense for last 7 days." />
  );
}

export default RecentExpenses;
