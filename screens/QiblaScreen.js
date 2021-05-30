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

const QiblaScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#F4F4F4", height: "100%" }}>
      <View
        style={{
          justifyContent: "space-between",
          alignSelf: "center",
          width: "90%",
          borderBottomColor: "black",
          borderBottomWidth: 5,
          marginTop: 30,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ marginTop: 10 }}>
            <Ionicons name="return-down-back-outline" size={28} color="black" />
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "black",
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            padding: 7,
            marginRight: 92,
          }}
        >
          Qibla Direction
        </Text>
      </View>
      <Text>Qibla Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default QiblaScreen;
