import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

const ImamAuthPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/imamscreenimage.jpg")}
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(29,31,30,0.6)",
            marginTop: 150,
            borderRadius: 100,
          }}
        >
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 75,
              padding: 25,
            }}
          >
            پیغام
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(29,31,30,0.6)",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 200,
          height: 40,
          width: 110,
          borderRadius: 20,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 25,
            padding: 15,
          }}
        >
          Imam
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "row",
          width: 20,
          height: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ImamSignup")}
          style={{
            backgroundColor: "rgba(29,31,30,0.6)",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 20,
            height: 40,
            width: 110,
            borderRadius: 20,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 25,
              padding: 15,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ImamSignin")}
          style={{
            backgroundColor: "rgba(29,31,30,0.6)",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 20,
            height: 40,
            width: 110,
            borderRadius: 20,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 25,
              padding: 15,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

export default ImamAuthPage;
