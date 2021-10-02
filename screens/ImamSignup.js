import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import firebase from "firebase";
import { ActivityIndicator } from "react-native-paper";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

const ImamSignup = ({ navigation }) => {
  const [profilephoto, setprofilephoto] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      return status;
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!result.cancelled) {
        setprofilephoto(result.uri);
      }
    } catch (error) {
      console.log("Error @pickImage: ", error);
    }
  };

  const addProfilePhoto = async () => {
    // const status = await getPermission();

    // if (status !== "granted") {
    //   alert("We need permission to access your camera roll.");

    //   return;
    // }

    pickImage();
  };

  const signup = () => {
    setLoader(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .database()
          .ref("imams/" + firebase.auth().currentUser.uid)
          .set({
            email: email,
            name: name,
            followers: 0,
            following: 0,
          });
        setLoader(false);
        navigation.navigate("ImamFeedScreen");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <ImageBackground
      source={require("../assets/imamscreenimage.jpg")}
      blurRadius={3}
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ImamAuth")}
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
          onPress={() => navigation.navigate("ImamSignin")}
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
        <View>
          {profilephoto ? (
            <TouchableOpacity style={{ top: -60 }} onPress={addProfilePhoto}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  alignSelf: "center",
                }}
                source={{ uri: profilephoto }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={addProfilePhoto}
              style={{
                backgroundColor: "rgba(29,31,30,0.4)",
                height: 100,
                width: 100,
                borderRadius: 50,
                top: -60,
                alignSelf: "center",
              }}
            >
              <AntDesign
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  top: 30,
                }}
                name="plus"
                size={40}
                color="white"
              />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            top: -30,
          }}
        >
          <AntDesign
            name="user"
            size={24}
            color="white"
            style={{ padding: 13, marginTop: 15, left: 15 }}
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
              left: 10,
            }}
            placeholder="Name"
            placeholderTextColor="white"
            onChangeText={(name) => setName(name)}
            value={name}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            top: -30,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={24}
            color="white"
            style={{ padding: 13, marginTop: 15, left: 15 }}
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
              left: 10,
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
            top: -30,
          }}
        >
          <Foundation
            name="key"
            size={24}
            color="white"
            style={{ padding: 13, marginTop: 15, left: 15 }}
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
              left: 10,
            }}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="white"
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
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
              width: 260,
              borderRadius: 20,
              marginRight: 10,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                fontSize: 23,
                padding: 15,
              }}
            >
              Signing up!
            </Text>
            <ActivityIndicator color="white" size="small" />
          </View>
        ) : (
          <TouchableOpacity
            onPress={signup}
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

export default ImamSignup;
