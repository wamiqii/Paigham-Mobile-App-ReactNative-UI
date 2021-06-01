import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <FontAwesome
          name="search"
          size={20}
          color="#3D73AF"
          style={{ right: -25, top: 1 }}
        />
        <TextInput
          placeholder="Search Imam/Users"
          placeholderTextColor="#3D73AF"
          style={{
            alignSelf: "center",
            fontSize: 22,
            textAlign: "center",
            borderWidth: 1,
            borderColor: "#3D73AF",
            borderRadius: 5,
            padding: 7,
            width: "80%",
            color: "#3D73AF",
            left: -8,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          borderColor: "#3D73AF",
          borderWidth: 2,
          width: "90%",
          height: "80%",
          margin: 50,
          alignSelf: "center",
          borderRadius: 15,
          top: -30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            color: "#3D73AF",
            borderBottomColor: "#3D73AF",
            borderBottomWidth: 2,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            width: "30%",
            alignSelf: "center",
          }}
        >
          Results
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default SearchScreen;
