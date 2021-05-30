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

const Addpost = ({ navigation }) => {
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
            marginRight: 120,
          }}
        >
          Create Post
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
            placeholder="What's on your mind?"
            placeholderTextColor="#797979"
            multiline
            numberOfLines={5}
          />
        </View>
        <ActionButton size={60} buttonColor="#883333">
          <ActionButton.Item buttonColor="#9b59b6" title="Take Photo">
            <Ionicons
              name="camera-outline"
              style={{ fontSize: 20, height: 22, color: "white" }}
            />
          </ActionButton.Item>
          <ActionButton.Item buttonColor="#3498db" title="Choose Photo">
            <Ionicons
              name="md-images-outline"
              style={{ fontSize: 20, height: 22, color: "white" }}
            />
          </ActionButton.Item>
        </ActionButton>
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
          Post
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default Addpost;
