import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

type InputProps = TextInputProps & {
  name: string;
  isSelected?: boolean;
}

export function Input({ name, isSelected = false, ...rest }: InputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  );
}
