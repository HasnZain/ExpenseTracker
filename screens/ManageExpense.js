import { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalSyles } from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExpense,
  addExpense,
  updateExpense,
} from "../store/redux/expensesReducer";
import ExpenseForm from "../components/ManaeExpense/ExpenseForm";
import { storeExpenses, updateDBExpense, deleteDBExpense } from "../utilities/http";
import Loading from "../components/UI/Loading";

function ManageExpense({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const allExpenses = useSelector((state) => state.expensesR.expenses);
  const dispatch = useDispatch();

  const ExpenseID = route.params?.expenseId;
  const isEditing = !!ExpenseID;

  const selectedExpense = allExpenses.find((expense) => expense.id === ExpenseID);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    dispatch(deleteExpense({ id: ExpenseID }));
    setIsSubmitting(true);
    await deleteDBExpense(ExpenseID);
    navigation.goBack();
  }

  function cancelButtonHandler() {
    navigation.goBack();
  }

  async function confirmButtonHandler(expenseData) {
    setIsSubmitting(true);
    if (isEditing) {
      dispatch(
        updateExpense({
          id: ExpenseID,
          updatedExpense: expenseData,
        })
      );
      await updateDBExpense(ExpenseID, expenseData);
    } else {
      const id = await storeExpenses(expenseData);
      dispatch(
        addExpense({ ...expenseData, id: id})
      );
    }
    navigation.goBack();
  }

  if (isSubmitting){
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        oncancel={cancelButtonHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmButtonHandler}
        defaultValue={selectedExpense}
      />
      {isEditing && (
        <View style={styles.iconContainer}>
          <IconButton
            icon="trash"
            size={24}
            color={GlobalSyles.colors.dangerColor}
            iconPressed={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalSyles.colors.lightColor,
    padding: 24,
  },
  iconContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalSyles.colors.infoColor,
    alignItems: "center",
  },
});
