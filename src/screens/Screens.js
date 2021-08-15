import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { useRoute } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

export const Screen = ({ navigation }) => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ alignItems: "flex-end", margin: 16 }}
          onPress={navigation.openDrawer}
        >
          <Feather name="menu" size={24} color="#161924" />
        </TouchableOpacity>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.text}> {route.name} Route </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    color: "#161924",
    fontSize: 20,
    fontWeight: "500",
  },
});
