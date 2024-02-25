import { TouchableOpacity, View, Text, Image } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails");
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/log-pine-trunks-sanitary-felling-forests-idea-logging-wood-heating-houses_166373-5019.jpg?t=st=1708773865~exp=1708777465~hmac=79ac12f6cd3d91a0a5ed21b0e56215301580c7ae40ce158ae13d0fd15be0705c&w=996",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            $250
          </Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
