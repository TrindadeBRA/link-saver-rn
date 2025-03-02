import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type OptionProps = TouchableOpacityProps & {
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    variant?: "primary" | "secondary";
}

export function Option({ name, icon, variant = "primary", ...rest }: OptionProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <MaterialIcons
                name={icon}
                size={24}
                color={variant === "primary" ? colors.gray[200] : colors.red[300]}
            />
            <Text
                style={[variant === "primary" ? styles.primaryTitle : styles.secondaryTitle]}
                numberOfLines={1}
            >
                {name}
            </Text>
        </TouchableOpacity>
    )
}