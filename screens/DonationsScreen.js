import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  ImageBackground,
  Switch,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

const DonationsScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#171717", height: "100%" }}>
      <View
        style={{
          justifyContent: "space-between",
          alignSelf: "center",
          width: "90%",
          borderBottomColor: "#C8C8C8",
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
              color="#C8C8C8"
            />
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#C8C8C8",
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            padding: 7,
          }}
        >
          Donations
        </Text>
        <TouchableOpacity>
          <Text style={{ marginTop: 10 }}>
            <Ionicons name="md-save-outline" size={28} color="#C8C8C8" />
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          width: "100%",
          // height: 800,
          top: 50,
        }}
      >
        <Text
          style={{
            color: "#C8C8C8",
            fontSize: 22,
            letterSpacing: 1.5,
            margin: 50,
            textAlign: "center",
          }}
        >
          Enter your card details!
        </Text>
        <ImageBackground
          borderRadius={10}
          style={{
            flex: 1,
            width: "95%",
            height: 240,
            alignSelf: "center",
            left: 10,
          }}
          source={require("../assets/donationATM.jpg")}
        >
          <TextInput
            style={{
              margin: 25,
              color: "#C8C8C8",
              fontSize: 24,
              letterSpacing: 1.5,
            }}
            placeholder="Enter Bank Name"
            placeholderTextColor="#C8C8C8"
          />
          <TextInput
            style={{
              top: 10,
              left: 25,
              color: "#C8C8C8",
              fontSize: 22,
              letterSpacing: 1.5,
            }}
            placeholder="XXXX XXXX XXXX XXXX"
            placeholderTextColor="#C8C8C8"
            keyboardType="number-pad"
          />
          <TextInput
            style={{
              top: 10,
              left: 25,
              color: "#C8C8C8",
              fontSize: 13,
              letterSpacing: 1.5,
            }}
            placeholder="EXPY XX/XX"
            placeholderTextColor="#C8C8C8"
            keyboardType="number-pad"
          />
          <View
            style={{
              top: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={{
                top: 15,
                left: 25,
                width: 300,
                color: "#C8C8C8",
                fontSize: 22,
                letterSpacing: 1.5,
              }}
              placeholder="Enter Account Name"
              placeholderTextColor="#C8C8C8"
            />
            <Image
              style={{ right: 30, top: 30 }}
              source={require("../assets/mastercard1.png")}
            />
          </View>
        </ImageBackground>
        <View
          style={{
            margin: 150,
            // flexDirection: "row",
            // justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: "#929292",
              borderWidth: 1,
              borderRadius: 10,
              width: 200,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              height: 50,
              padding: 8,
              top: -120,
            }}
          >
            <Text
              style={{
                color: "#C8C8C8",
                fontSize: 18,
                letterSpacing: 1.5,
                padding: 10,
              }}
            >
              Save Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("DonatingScreen")}
            style={{
              borderColor: "#929292",
              backgroundColor: "#C8C8C8",
              borderWidth: 3,
              borderRadius: 10,
              width: 400,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              height: 50,
              padding: 8,
              top: 145,
            }}
          >
            <Text
              style={{
                color: "#171717",
                fontSize: 18,
                letterSpacing: 1.5,
                padding: 10,
              }}
            >
              Donate now!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

export default DonationsScreen;
