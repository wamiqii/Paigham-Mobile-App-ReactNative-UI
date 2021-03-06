import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  Switch,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

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

const NewConversation = ({ navigation, route }) => {
  const [msglast, setmsglast] = useState(route.params?.msg);

  return (
    <View style={{ alignItems: "center", flex: 1, backgroundColor: "#F4F4F4" }}>
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
            marginRight: 80,
          }}
        >
          New Conversation
        </Text>
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
    </View>
  );
};

export default NewConversation;
