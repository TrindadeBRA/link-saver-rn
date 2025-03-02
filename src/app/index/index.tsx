import { View, Image, TouchableOpacity, FlatList, Modal, Text } from "react-native";

import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { router } from "expo-router";
import { useState } from "react";
import { categories } from "@/utils/categories";
export default function Index() {
  const [category, setCategory] = useState(categories[0].name);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.5} onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.red[300]} />
        </TouchableOpacity>

      </View>

      <Categories selected={category} onChange={setCategory} />

      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Link name="Rocketseat" 
          url="https://www.google.com"
          onDetails={() => { console.log("Details") }} />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={false} transparent={true} animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalContent}>

            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Projetos</Text>
              <TouchableOpacity activeOpacity={0.5}>
                <MaterialIcons name="close" size={30} color={colors.gray[300]} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>
              Trindade
            </Text>

            <Text style={styles.modalLinkUrl}>
              https://www.google.com
            </Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" />
              <Option name="Abrir" icon="open-in-new" variant="secondary"/>
            </View>
            
          </View>
        </View>
      </Modal>

    </View>

  );
}

