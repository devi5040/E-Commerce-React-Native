import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import styles from "./carousel.style";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://img.freepik.com/free-photo/3d-wood-planks_1048-5018.jpg?t=st=1708773753~exp=1708777353~hmac=071fe3a87df730cbfa23c9b54373ee9b0193d992593969d393e9a0e73feff6f3&w=1060",
    "https://img.freepik.com/free-photo/rustic-timber-plank-table-perfect-outdoors-generated-by-ai_188544-10273.jpg?t=st=1708773808~exp=1708777408~hmac=f9c40f543ea291f558f3546f6e94df7c86e06c7a1a696adf2895e43f957b3d74&w=1060",
    "https://img.freepik.com/free-photo/log-pine-trunks-sanitary-felling-forests-idea-logging-wood-heating-houses_166373-5019.jpg?t=st=1708773865~exp=1708777465~hmac=79ac12f6cd3d91a0a5ed21b0e56215301580c7ae40ce158ae13d0fd15be0705c&w=996",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;
