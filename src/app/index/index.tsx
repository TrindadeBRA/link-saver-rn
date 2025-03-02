import { View, Image, TouchableOpacity, FlatList, Modal, Text, Alert, Linking } from "react-native";

import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { categories } from "@/utils/categories";
import { LinkStorage, linkStorage } from "@/storage/link-storage";

export default function Index() {
  const [category, setCategory] = useState(categories[0].name);
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState<LinkStorage | null>(null);
  async function getLinks() {
    try {

      const links = await linkStorage.getLinks();
      const reversedLinks = links.reverse();
      const filteredLinks = reversedLinks.filter((link) => link.category === category);
      setLinks(filteredLinks);
    } catch (error) {
      Alert.alert("Erro", "Erro ao buscar links");
      console.log(error);
    }
  }

  function handleDetails(link: LinkStorage) {
    setSelectedLink(link);
    setShowModal(true);
  }

  async function handleRemove(id: string) {
    try {
      await linkStorage.deleteLink(id);
      getLinks();
      Alert.alert("Sucesso", "Link excluído com sucesso", [
        {
          text: "OK",
          onPress: () => setShowModal(false)
        }
      ]);
    } catch (error) {
      Alert.alert("Erro", "Erro ao excluir link");
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    getLinks();
  }, [category]));

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
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link name={item.name}
            url={item.url}
            onDetails={() => handleDetails(item)} />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>

            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Projetos</Text>
              <TouchableOpacity activeOpacity={0.5} onPress={() => setShowModal(false)}>
                <MaterialIcons name="close" size={30} color={colors.gray[300]} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>
              {selectedLink?.name}
            </Text>

            <Text style={styles.modalLinkUrl}>
              {selectedLink?.url}
            </Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" onPress={() => handleRemove(selectedLink?.id || "")} />
              <Option name="Abrir" icon="open-in-new" variant="secondary" onPress={() => Linking.openURL(selectedLink?.url || "")} />
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
}

