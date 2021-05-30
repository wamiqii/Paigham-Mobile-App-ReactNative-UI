import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  Switch,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import ActionButton from "react-native-action-button";

import { Ionicons } from "@expo/vector-icons";

const AddAnnouncement = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#B7CADF", height: "100%" }}>
      <View
        style={{
          justifyContent: "space-between",
          alignSelf: "center",
          width: "90%",
          marginTop: 30,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ marginTop: 10 }}>
            <Ionicons
              name="return-down-back-outline"
              size={28}
              color="#15365A"
            />
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#15365A",
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            padding: 7,
            marginRight: 50,
          }}
        >
          Create Announcement
        </Text>
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextInput
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 24,
              textAlign: "center",
              width: "90%",
              marginBottom: 15,
            }}
            placeholder="Type Something!"
            placeholderTextColor="#797979"
            multiline
            numberOfLines={5}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Addpost")}
        style={{
          backgroundColor: "#15365A",
          padding: 12,
          width: "60%",
          borderRadius: 20,
          borderColor: "#25B0C5",
          borderWidth: 2,
          bottom: 10,
          alignItems: "center",
          justifyContent: "center",
          left: 80,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          Announce
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default AddAnnouncement;
