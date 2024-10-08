import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Screen2() {
  const [data, setData] = useState([
    {
      id: 1,
      imgItem: require("../assets/images/imagesPage2/giacchuyen 1.png"),
    },
    {
      id: 2,
      imgItem: require("../assets/images/imagesPage2/daynguon 1.png"),
    },
    {
      id: 3,
      imgItem: require("../assets/images/imagesPage2/dauchuyendoipsps2 1.png"),
    },
    {
      id: 4,
      imgItem: require("../assets/images/imagesPage2/dauchuyendoi 1.png"),
    },
    {
      id: 5,
      imgItem: require("../assets/images/imagesPage2/carbusbtops2 1.png"),
    },
    {
      id: 6,
      imgItem: require("../assets/images/imagesPage2/daucam 1.png"),
    },
  ]);

  return (
    <View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.containerItem}>
              <Image style={styles.imgSize} source={item.imgItem}></Image>

              <View>
                <Text>Cáp chuyển từ Cổng USB sang PS2...</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <AntDesign name="star" size={16} color="yellow" />
                <AntDesign name="star" size={16} color="yellow" />
                <AntDesign name="star" size={16} color="yellow" />
                <AntDesign name="star" size={16} color="yellow" />
                <AntDesign name="star" size={16} color="black" />

                <Text>(15)</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text>69.900đ </Text>
                <Text>-39%</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>

      <View style={styles.containerFooter}>
        <Image
          style={styles.imgSize}
          source={require("../assets/images/imagesFooter/iconSideBar.png")}
        ></Image>
        <Image
          style={styles.imgSize}
          source={require("../assets/images/imagesFooter/Home.png")}
        ></Image>
        <Image
          style={styles.imgSize}
          source={require("../assets/images/imagesFooter/Return.png")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerHeader: {
    textAlign: "center",
  },

  containerItem: {
    flexDirection: "column",
    width: "50%",
    height: 180,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "space-between",
  },

  imgSize: {
    width: 50,
    height: 50,
  },

  btnChat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "red",
  },

  containerFooter: {
    width: "100%",
    height: 60,
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
