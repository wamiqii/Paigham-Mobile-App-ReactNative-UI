import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const SearchScreen = ({ navigation }) => {
  const Messages = [
    {
      id: "1",
      userName: "Muhammad Ali",
      userImg: require("../assets/ImamDP.png"),
      messageText: "Imam",
    },
    {
      id: "2",
      userName: "Taha Zahir",
      userImg: require("../assets/Taha.jpg"),
      messageText: "User",
    },
  ];
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
          placeholder="Imam/Users"
          placeholderTextColor="#3D73AF"
          style={{
            alignSelf: "center",
            fontSize: 22,
            textAlign: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#3D73AF",
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
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20,
          alignItems: "center",
          backgroundColor: "#F4F4F4",
        }}
      >
        <FlatList
          data={Messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MessageChatScreen", {
                  userName: item.userName,
                  userImg: item.userImg,
                })
              }
              style={{ width: "100%" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ paddingTop: 15, paddingBottom: 15 }}>
                  <Image
                    style={{
                      width: 55,
                      height: 55,
                      backgroundColor: "white",
                      borderRadius: 50,
                    }}
                    source={item.userImg}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 15,
                    paddingLeft: 0,
                    marginLeft: 10,
                    width: "84%",
                    borderBottomWidth: 1,
                    borderBottomColor: "#cccccc",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 5,
                    }}
                  >
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                      {item.userName}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontStyle: "italic",
                      color: "#333333",
                    }}
                  >
                    {item.messageText}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default SearchScreen;
