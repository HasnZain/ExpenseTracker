import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { GlobalSyles } from "../../constants/styles";
import { useState } from "react";
import CustomButton from "../UI/CustomButton";

export default function ExpenseForm({oncancel, onSubmit, submitButtonLabel, defaultValue}) {
  const [inputValue, setInputValue] = useState({
    amount: defaultValue ? defaultValue.amount.toString() : "",
    date: defaultValue ? defaultValue.date : "",
    desc: defaultValue ? defaultValue.desc : "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValue((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {

    const amountIsValid = !isNaN(inputValue.amount) && inputValue.amount > 0;
    const date = new Date(inputValue.date);
    const dateIsValid = new Date(inputValue.date).toString() !== 'Invalid Date';
    const descIsValid = typeof inputValue.desc === 'string' && inputValue.desc.trim().length > 0;

    //console.log(inputValue.amount, amountIsValid, date, dateIsValid, inputValue.desc, descIsValid);

    if (!amountIsValid || !dateIsValid || !descIsValid) {
        Alert.alert('Invalid Input', 'Please check your input values.');
        return;
    }

    const expenseData = {
        amount: +inputValue.amount,
        date: date.toISOString(),
        desc: inputValue.desc.trim() 
    };

    onSubmit(expenseData);
}


  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValue.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValue.date,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "desc"),
          value: inputValue.desc,
        }}
      />
      <View style={styles.buttonContainer}>
        <CustomButton style={styles.button} mode="flat" onPress={oncancel}>
          Cancel
        </CustomButton>
        <CustomButton style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 10,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalSyles.colors.primaryColor,
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
