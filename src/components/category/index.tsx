import { Text, View, Pressable, PressableProps } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

type InputProps = PressableProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  isSelected?: boolean;
}

export function Category({ name, icon, isSelected = false, ...rest }: InputProps) {
    const color = isSelected ? colors.red[300] : colors.gray[400];
  return (
      <Pressable style={styles.container} {...rest}>
        <MaterialIcons name={icon} size={16} color={color} />
        <Text style={[styles.name, { color }]}>{name}</Text>
      </Pressable>
  );
}
