import { FlatList } from "react-native";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";
import { styles } from "./styles";

type CategoriesProps = {
 selected: string;
 onChange: (category: string) => void;
}

export function Categories({ selected, onChange }: CategoriesProps) {


    return (
        <FlatList
            data={categories}
            horizontal
            style={styles.container}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Category 
                    key={item.id} 
                    name={item.name} 
                    icon={item.icon} 
                    isSelected={item.name === selected} 
                    onPress={() => onChange(item.name)}
                />
            )}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    )
}