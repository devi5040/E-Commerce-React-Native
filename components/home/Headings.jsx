import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./headings.style";
import { Ionicons } from "@expo/vector-icons";

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;