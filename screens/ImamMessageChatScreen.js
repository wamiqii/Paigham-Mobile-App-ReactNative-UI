import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const ImamMessageChatScreen = ({ navigation, route }) => {
  const [chatname, setchatname] = useState(route.params.userName);
  const [userImg, setuserImg] = useState(route.params.userImg);
  const [lastmsg, setlastmsg] = useState("Hello Muhammad!");

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: lastmsg,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Wamiq Waheed",
          avatar: require("../assets/userdisplay.jpg"),
        },
      },
      {
        _id: 2,
        text: `Hello ${chatname}!`,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "Muhammad Ali",
        },
        sent: true,
        received: true,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 2, marginRight: 5 }}
            size={40}
            color="#3D73AF"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#3D73AF",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ImamAllChatsScreen", { msg: lastmsg })
          }
        >
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
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            right: -20,
            padding: 7,
          }}
        >
          {chatname}
        </Text>
        <Text
          style={{
            color: "#F4F4F4",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            left: 0,
            padding: 7,
          }}
        >
          hello
        </Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        isTyping={false}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom={true}
        scrollToBottomComponent={scrollToBottomComponent}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default ImamMessageChatScreen;
