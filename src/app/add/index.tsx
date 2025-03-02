import { Text, View, Pressable, PressableProps, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Add() {
  
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  function isValidUrl(url: string): boolean {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocolo
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])?)\\.)+[a-z]{2,}|' + // domínio
      'localhost|' + // localhost
      '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IP
      '\\[?[a-fA-F0-9]*:[a-fA-F0-9:%.~+\\-]*\\])' + // IPv6
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+:]*)*' + // caminho
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // consulta
      '(\\#[-a-z\\d_]*)?$','i'); // fragmento
    return !!pattern.test(url);
  }

  function handleAddLink() {

    if(!category) {
      Alert.alert("Categoria", "Selecione uma categoria");
      return;
    }

    if(!name.trim()) {
      Alert.alert("Nome do Link", "Digite o nome do link");
      return;
    }

    if(!url.trim()) {
      Alert.alert("Url", "Digite a url do link");
      return;
    }

    if (!isValidUrl(url.trim())) {
      Alert.alert("Url", "Digite uma URL válida");
      return;
    }
    
    console.log(
      {
        category: category,
        name: name,
        url: url
      }
    );
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>
        Selecione uma categoria
      </Text>

      <Categories 
        onChange={setCategory} 
        selected={category} 
      />

      <View style={styles.form}>
        <Input 
          name="Nome do Link"
          placeholder="Nome do Link"
          onChangeText={(value) => setName(value)}
          autoCorrect={false}
        />
        <Input 
          name="Url"
          placeholder="https://www.google.com"
          onChangeText={(value) => setUrl(value)}
          keyboardType="url"
          inputMode="url"
          autoCorrect={false}
        />
        <Button title="Adicionar" onPress={handleAddLink} />
      </View>
    </View>
  )
}