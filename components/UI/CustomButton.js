import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalSyles } from "../../constants/styles";

export default function CustomButton({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalSyles.colors.primaryColorLight,
    borderWidth: 1,
    borderColor: GlobalSyles.colors.primaryColor,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: GlobalSyles.colors.lightColor,
    textAlign: "center",
  },
  flatText: {
    color: GlobalSyles.colors.primaryColor,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalSyles.colors.secondarylight,
    borderRadius: 4,
  },
});
