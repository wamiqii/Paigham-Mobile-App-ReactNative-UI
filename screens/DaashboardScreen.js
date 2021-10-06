import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { Card, Title } from "react-native-paper";

const DashboardScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/DashboardBG.jpg")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          justifyContent: "space-between",
          alignSelf: "center",
          width: "90%",
          borderBottomColor: "#D5D5D5",
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
              color="#D5D5D5"
            />
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#D5D5D5",
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            padding: 7,
            marginRight: 85,
          }}
        >
          Islamic Features
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            onPress={() => navigation.navigate("QuranScreen")}
            style={{
              width: "80%",
              height: "19%",
              margin: 25,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 11,
              },
              shadowOpacity: 0.57,
              shadowRadius: 15.19,
              elevation: 23,
            }}
          >
            <Card.Content style={{ backgroundColor: "black" }}>
              <Title style={{ color: "#D5D5D5", letterSpacing: 1 }}>
                Qu'ran
              </Title>
            </Card.Content>
            <Card.Cover source={require("../assets/QuranCard.jpg")} />
          </Card>

          <Card
            onPress={() => navigation.navigate("Camera")}
            style={{
              width: "80%",
              height: "19%",
              margin: 25,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 11,
              },
              shadowOpacity: 0.57,
              shadowRadius: 15.19,
              elevation: 23,
            }}
          >
            <Card.Content style={{ backgroundColor: "black" }}>
              <Title
                style={{ color: "#D5D5D5", letterSpacing: 1, fontSize: 17 }}
              >
                Qibla Direction in Augmented Reality
              </Title>
            </Card.Content>
            <Card.Cover source={require("../assets/Qibla1.jpg")} />
          </Card>

          <Card
            onPress={() => navigation.navigate("DonationsScreen")}
            style={{
              width: "80%",
              height: "19%",
              margin: 25,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 11,
              },
              shadowOpacity: 0.57,
              shadowRadius: 15.19,
              elevation: 23,
            }}
          >
            <Card.Content style={{ backgroundColor: "black" }}>
              <Title style={{ color: "#D5D5D5", letterSpacing: 1 }}>
                Donations
              </Title>
            </Card.Content>
            <Card.Cover source={require("../assets/DonationCard.jpg")} />
          </Card>

          <Card
            onPress={() => navigation.navigate("FormsScreen")}
            style={{
              width: "80%",
              height: "19%",
              margin: 25,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 11,
              },
              shadowOpacity: 0.57,
              shadowRadius: 15.19,

              elevation: 23,
            }}
          >
            <Card.Content style={{ backgroundColor: "black" }}>
              <Title style={{ color: "#D5D5D5", letterSpacing: 1 }}>
                Forms
              </Title>
            </Card.Content>
            <Card.Cover source={require("../assets/FormsCard21.jpg")} />
          </Card>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </ImageBackground>
  );
};

export default DashboardScreen;
