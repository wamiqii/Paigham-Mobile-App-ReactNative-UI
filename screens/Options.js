import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  Switch,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import firebase from "firebase";
import Modal from "react-native-modal";
import { FAB } from "react-native-paper";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { UserContext } from "../context/UserContext";
import { Ionicons } from "@expo/vector-icons";

const Options = ({ navigation }) => {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => navigation.navigate("FirstScreen"))
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: "black",
          height: "9.5%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ marginTop: 35, marginLeft: 10, marginRight: 10 }}
        >
          <Image
            style={{
              width: 45,
              height: 45,
              borderRadius: 50,
              borderRadius: 50,
              backgroundColor: "#E8E8E8",
            }}
            source={require("../assets/ImamDP.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            letterSpacing: 2,
            marginTop: 25,
            marginLeft: 90,
            marginRight: 50,
            justifyContent: "center",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Paigham
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("DashboardScreen")}
          style={{
            marginLeft: 60,
            marginRight: 50,
            alignSelf: "center",
            marginTop: 30,
          }}
        >
          <MaterialIcons name="dashboard" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          alignSelf: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 35,
            letterSpacing: 2,
            margin: 45,
            borderBottomColor: "black",
            borderBottomWidth: 2,
          }}
        >
          Options
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            top: 75,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <MaterialIcons
              name="account-circle"
              size={32}
              color="black"
              style={{ alignSelf: "center", bottom: -20 }}
            />
            <Text
              style={{
                color: "black",
                fontSize: 21,
                letterSpacing: 2,
                borderRightColor: "black",
                borderRightWidth: 1,
                borderBottomColor: "black",
                borderBottomWidth: 1,
                padding: 30,
              }}
            >
              Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AllChatsScreen")}
          >
            <Ionicons
              name="chatbubbles-outline"
              size={30}
              color="black"
              style={{ alignSelf: "center", bottom: -20 }}
            />
            <Text
              style={{
                color: "black",
                fontSize: 21,
                letterSpacing: 2,
                borderBottomColor: "black",
                borderBottomWidth: 1,
                padding: 30,
              }}
            >
              Chats
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            top: 85,
            width: "60%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 15,
          }}
        >
          <Ionicons
            name="notifications-circle"
            size={30}
            color="black"
            style={{ alignSelf: "center", top: -22, left: 105 }}
          />
          <Text
            style={{
              color: "black",
              fontSize: 21,
              letterSpacing: 2,
              padding: 20,
              top: 5,
            }}
          >
            Notifications
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            style={{ top: 5 }}
          />
        </View>
        <TouchableOpacity
          onPress={logout}
          style={{
            top: 85,
            width: "60%",
            justifyContent: "center",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 20,
          }}
        >
          <AntDesign
            name="logout"
            size={30}
            color="black"
            style={{ alignSelf: "center" }}
          />
          <Text
            style={{
              color: "black",
              fontSize: 21,
              letterSpacing: 2,
              alignSelf: "center",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default Options;
