import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";

import { DrawerItemList } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

export const SideBar = (props) => {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../../assets/liquid.jpg")}
        style={{ width: undefined, padding: 16, paddingTop: 48 }}
      >
        <Image
          source={require("../../../assets/profile.png")}
          style={styles.profile}
        />
        <Text style={styles.name}>Giovani Alves</Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.followers}>987 Followers</Text>
          <Ionicons name="md-people" size={16} color="rgba(255,255,255, 0.9)" />
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <DrawerItemList {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  name: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8,
  },
  followers: {
    color: "rgba(255,255,255, 0.9)",
    fontWeight: "500",
    fontSize: 12,
    marginRight: 4,
  },
});
