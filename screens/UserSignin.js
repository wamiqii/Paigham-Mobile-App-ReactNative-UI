import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import firebase from "firebase";
import { ActivityIndicator } from "react-native-paper";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const UserSignup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [errorshow, setErrorshow] = useState("");

  const signin = () => {
    setLoader(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoader(false);
        navigation.navigate("Maps");
      })
      .catch((error) => {
        setLoader(false);
        setErrorshow(error.message);
      });
  };

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
          onPress={() => navigation.navigate("UserSignup")}
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
            Sign up!
          </Text>
          <MaterialIcons
            name="assignment-ind"
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
          marginTop: 140,
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
          Sign in
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "rgba(29,31,30,0.4)",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 40,
          height: 300,
          width: 380,
          borderRadius: 10,
        }}
      >
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
            autoCapitalize="none"
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
            onChangeText={(email) => setEmail(email)}
            value={email}
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
            autoCapitalize="none"
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
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
        </View>
        <View>
          <Text
            style={{
              color: "red",
              alignSelf: "center",
              fontSize: 15,
              padding: 7,
            }}
          >
            {errorshow}
          </Text>
        </View>
      </View>
      <View>
        {loader ? (
          <View
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
            <ActivityIndicator color="white" size="small" />
          </View>
        ) : (
          <TouchableOpacity
            onPress={signin}
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
              Sign in!
            </Text>
            <AntDesign
              name="login"
              size={24}
              color="white"
              style={{ padding: 5, marginTop: 12 }}
            />
          </TouchableOpacity>
        )}
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

export default UserSignup;
