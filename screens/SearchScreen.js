import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

const SearchScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#F4F4F4", height: "100%" }}>
      <View
        style={{
          justifyContent: "space-between",
          alignSelf: "center",
          width: "90%",
          borderBottomColor: "#3D73AF",
          borderBottomWidth: 5,
          marginTop: 30,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ marginTop: 10 }}>
            <Ionicons
              name="return-down-back-outline"
              size={28}
              color="#3D73AF"
            />
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#3D73AF",
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            padding: 7,
            marginRight: 145,
          }}
        >
          Search
        </Text>
      </View>
      <Text>Searching</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default SearchScreen;
