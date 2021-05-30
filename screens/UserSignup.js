import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const UserSignup = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/userscreenimage.jpg")}
      blurRadius={3}
      style={{ flex: 1, alignItems: "center" }}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserAuth")}
          style={{
            backgroundColor: "rgba(29,31,30,0.4)",
            height: 40,
            marginTop: 40,
            flexDirection: "row",
            marginRight: 170,
            borderRadius: 10,
          }}
        >
          <Ionicons
            name="return-down-back-outline"
            size={24}
            color="white"
            style={{ paddingLeft: 10, marginTop: 8 }}
          />
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 20,
              padding: 15,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserSignin")}
          style={{
            backgroundColor: "rgba(29,31,30,0.4)",
            height: 40,
            marginTop: 40,
            flexDirection: "row",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 20,
              padding: 15,
            }}
          >
            Sign in!
          </Text>
          <FontAwesome
            name="sign-in"
            size={24}
            color="white"
            style={{ paddingRight: 10, marginLeft: -5, marginTop: 8 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "rgba(29,31,30,0.4)",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 70,
          height: 60,
          width: 270,
          borderRadius: 10,
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
          Create an Account!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "rgba(29,31,30,0.4)",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 40,
          height: 500,
          width: 380,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <AntDesign
            name="user"
            size={24}
            color="white"
            style={{ padding: 13, marginTop: 15 }}
          />
          <TextInput
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              alignSelf: "center",
              height: 40,
              width: 250,
              color: "white",
              fontSize: 17,
              padding: 10,
              margin: 15,
            }}
            placeholder="Username"
            placeholderTextColor="white"
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <EvilIcons
            name="pencil"
            size={28}
            color="white"
            style={{ padding: 12, marginTop: 15, marginLeft: -52 }}
          />
          <TextInput
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              alignSelf: "center",
              height: 40,
              width: 120,
              color: "white",
              fontSize: 17,
              marginRight: 5,
              padding: 10,
              margin: 15,
            }}
            placeholder="First Name"
            placeholderTextColor="white"
          />
          <TextInput
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              alignSelf: "center",
              height: 40,
              width: 120,
              color: "white",
              fontSize: 17,
              marginLeft: 5,
              padding: 10,
              margin: 15,
            }}
            placeholder="Last Name"
            placeholderTextColor="white"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={24}
            color="white"
            style={{ padding: 13, marginTop: 15 }}
          />
          <TextInput
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              alignSelf: "center",
              height: 40,
              width: 250,
              color: "white",
              fontSize: 17,
              padding: 10,
              margin: 15,
            }}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="white"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Entypo
            name="phone"
            size={24}
            color="white"
            style={{ padding: 13, marginTop: 15 }}
          />
          <TextInput
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              alignSelf: "center",
              height: 40,
              width: 250,
              color: "white",
              fontSize: 17,
              padding: 10,
              margin: 15,
            }}
            keyboardType="phone-pad"
            placeholder="Phone No."
            placeholderTextColor="white"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Foundation
            name="key"
            size={24}
            color="white"
            style={{ padding: 13, marginTop: 15 }}
          />
          <TextInput
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              alignSelf: "center",
              height: 40,
              width: 250,
              color: "white",
              fontSize: 17,
              padding: 10,
              margin: 15,
            }}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="white"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Foundation
            name="key"
            size={24}
            color="white"
            style={{ padding: 13, marginTop: 15 }}
          />
          <TextInput
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              alignSelf: "center",
              height: 40,
              width: 250,
              color: "white",
              fontSize: 17,
              padding: 10,
              margin: 15,
            }}
            secureTextEntry={true}
            placeholder="Confirm your password"
            placeholderTextColor="white"
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(29,31,30,0.4)",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 40,
            height: 60,
            width: 220,
            borderRadius: 20,
            marginRight: 10,
            flexDirection: "row",
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
            Sign up!
          </Text>
          <EvilIcons
            name="arrow-right"
            size={40}
            color="white"
            style={{ padding: 5, marginTop: 10 }}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

export default UserSignup;
