import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { item } from "../../demoImage/onboarding";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = React.useRef(0);
  const { width } = Dimensions.get("window");
   const navigation = useNavigation();


  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x; // Corrected to 'contentOffset.x'
    const currentIndex = Math.round(contentOffsetX / width); // Ensure proper casing for contentOffset
    console.log(currentIndex);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlide = currentSlideIndex + 1;
    if (nextSlide != item.length) {
      const offset = nextSlide * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlide);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={item}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.flatlistContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.carouselIcon}>
          {item.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: "#5d1ab2",
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        {currentSlideIndex == item.length - 1 ? (
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.nextBtn}>
            <TouchableOpacity style={styles.btn} onPress={goNextSlide}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
            <Text style={styles.skip}>Skip to log in</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  image: {
    width: width,
  },
  flatlistContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'space-between'
    gap: 30,
    // borderWidth: 1,
    // borderColor: 'blue'
  },
  contentContainer: {
    // flex: 1,
    position: "absolute",
    textAlign: "center",
    // left: '30%',
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: 140,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'Pacifico-Regular'
  },
  footer: {
    height: height * 0.25,
    paddingHorizontal: 20,
    gap: 30,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  carouselIcon: {
    flexDirection: "row",
    justifyContent: "center",
    // marginTop: 20
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    backgroundColor: "#5d1ab2",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    paddingHorizontal: 50,
    textAlign: "center",
    fontFamily: 'Pacifico-Regular'
  },
  skip: {
    fontSize: 16,
    fontFamily: "Roboto-Italic-VariableFont_wdth,wght",
    // borderWidth: 1,
    textAlign: "center",
    color: "#ddd",
    fontWeight: "bold",
    marginTop: 16,
  },
});
