import { MaterialIcons } from "@expo/vector-icons";

type Category = {
    id: number;
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}


export const categories: Category[] = [
    {
        id: 1,
        name: "Projetos",
        icon: "code",
    },
    {
        id: 2,
        name: "Site",
        icon: "web",
    },
    {
        id: 3,
        name: "Mobile",
        icon: "smartphone",
    },
    {
        id: 4,
        name: "Design",
        icon: "palette",
    },
    {
        id: 5,
        name: "Marketing",
        icon: "mail",
    },
    {
        id: 6,
        name: "Vendas",
        icon: "shopping-cart",
    },
    
    
];