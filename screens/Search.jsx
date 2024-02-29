import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Text,
} from "react-native";
import styles from "./search.style";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import axios from "axios";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchresult, setSearchResult] = useState([]);

  //"http://192.168.1.57:3000/api/products/search/${searchKey}"
  const handlePress = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.57:3000/api/products/search/Teak`
      );
      setSearchResult(response.data);
    } catch (error) {
      console.log("Faliled to get products", error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="what are you looking for?"
            onChange={handlePress}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handlePress()}
          >
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {searchresult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          style={{ marginHorizontal: 12 }}
          data={searchresult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
