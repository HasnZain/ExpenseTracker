import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

export default function IconButton({ icon, color, size, iconPressed }) {
  return (
    <Pressable
      onPress={iconPressed}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 6,
    borderRadius: 24,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
