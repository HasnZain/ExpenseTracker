import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalSyles } from "../../constants/styles";

export default function Input({ label, style, textInputConfig }) {

    const inputStyles= [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 5,
  },
  label: {
    fontSize: 12,
    marginBottom: 3,
    color: GlobalSyles.colors.primaryColor,
  },
  input: {
    backgroundColor: GlobalSyles.colors.infoColor,
    padding: 10,
    borderRadius: 6,
    fontSize: 14,
    color: GlobalSyles.colors.lightColor,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
});
