import { createSlice } from "@reduxjs/toolkit";

// const dummyExpense = [
//   {
//     id: "e1",
//     desc: "a pair of shoes",
//     amount: 29.25,
//     date: "2023-12-21T00:00:00.000Z",
//   },
//   {
//     id: "e2",
//     desc: "a pair of trousers",
//     amount: 48.1,
//     date: "2024-02-21T00:00:00.000Z",
//   },
//   {
//     id: "e3",
//     desc: "vegetables",
//     amount: 34.17,
//     date: "2024-04-15T00:00:00.000Z",
//   },
//   {
//     id: "e4",
//     desc: "a dozen eggs",
//     amount: 16.66,
//     date: "2024-04-28T00:00:00.000Z",
//   },
//   {
//     id: "e5",
//     desc: "a T-shirt",
//     amount: 30,
//     date: "2024-05-13T00:00:00.000Z",
//   },
//   {
//     id: "e6",
//     desc: "a pair of trousers",
//     amount: 48.1,
//     date: "2024-02-21T00:00:00.000Z",
//   },
//   {
//     id: "e7",
//     desc: "vegetables",
//     amount: 34.17,
//     date: "2024-05-15T00:00:00.000Z",
//   },
//   {
//     id: "e8",
//     desc: "a dozen eggs",
//     amount: 16.66,
//     date: "2024-04-28T00:00:00.000Z",
//   },
//   {
//     id: "e9",
//     desc: "a T-shirt",
//     amount: 30,
//     date: "2024-05-13T00:00:00.000Z",
//   },
//   {
//     id: "e10",
//     desc: "testing",
//     amount: 34.17,
//     date: "2024-05-15T00:00:00.000Z",
//   },
// ];

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push({ ...action.payload });
    },
    setExpenses: (state, action) => {
      state.expenses = action.payload;
    },
    updateExpense: (state, action) => {
      const { id, updatedExpense } = action.payload;
      const index = state.expenses.findIndex((expense) => expense.id === id);
      if (index !== -1) {
        state.expenses[index] = { ...state.expenses[index], ...updatedExpense };
      }
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
  },
});

export const { addExpense, deleteExpense, updateExpense, setExpenses } =
  expenseSlice.actions;
export default expenseSlice.reducer;
