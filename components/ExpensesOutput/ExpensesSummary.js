import { StyleSheet, Text, View } from "react-native";
import { GlobalSyles } from "../../constants/styles";

function ExpensesSummary({ expenses, timePeriod }) {
  const totalExpense = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{timePeriod}</Text>
      <Text style={styles.total}>$ {totalExpense.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalSyles.colors.infoColor,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 12,
        color: GlobalSyles.colors.lightColor
    },
    total: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalSyles.colors.lightColor
    }
});