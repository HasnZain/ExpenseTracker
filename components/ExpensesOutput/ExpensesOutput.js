import { StyleSheet, Text, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalSyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensePeriod, fallback }) {
  let content = <Text style={styles.infoText}>{fallback}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} timePeriod={expensePeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 0,
    backgroundColor: GlobalSyles.colors.lightColor,
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    color: GlobalSyles.colors.primaryColor,
    marginTop: 32
  },
});
