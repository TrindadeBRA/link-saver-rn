import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  primaryTitle: {
    color: colors.gray[300],
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryTitle: {
    color: colors.red[300],
    fontSize: 16,
  },
});