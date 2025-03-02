import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

type LinkProps = TouchableOpacityProps & {
    name: string;
    url: string;
    onDetails: () => void;
}

export function Link({ name, url, onDetails, ...rest }: LinkProps) {
    return (
        <View style={styles.container}>
          <View style={styles.details}>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
            <Text style={styles.color} numberOfLines={1}>{url}</Text>
          </View>

          <TouchableOpacity onPress={onDetails}>
            <MaterialIcons name="chevron-right" size={24} color={colors.gray[400]} />
          </TouchableOpacity>

        </View>
    )
}