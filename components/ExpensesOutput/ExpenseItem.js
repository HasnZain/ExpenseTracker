import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalSyles } from "../../constants/styles";
import { getFormattedDate } from "../../utilities/date";

function ExpenseItem({ id, desc, date, amount }) {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={styles.descContainer}>
          <Text style={[styles.textColor, styles.descText]}>{desc}</Text>
          <Text style={styles.textColor}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalSyles.colors.secondarylight,
    marginVertical: 8,
    borderRadius: 6,
    elevation: 4,
    shadowColor: "grey",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  descContainer: {
    paddingLeft: 12,
  },
  descText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  textColor: {
    color: GlobalSyles.colors.lightColor,
  },
  amountContainer: {
    backgroundColor: GlobalSyles.colors.secondaryDark,
    padding: 18,
    borderRadius: 6,
    minWidth: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  amountText: {
    color: GlobalSyles.colors.lightColor,
    fontSize: 14,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
