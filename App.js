import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import ImamAuthPage from "./screens/ImamAuthPage";
import UserAuthPage from "./screens/UserAuthPage";
import ImamSignup from "./screens/ImamSignup";
import ImamSignin from "./screens/ImamSignin";
import UserSignup from "./screens/UserSignup";
import UserSignin from "./screens/UserSignin";
import UserMapScreen from "./screens/UserMapScreen";
import UserFeedScreen from "./screens/UserFeedScreen";
import DashboardScreen from "./screens/DaashboardScreen";
import QuranScreen from "./screens/QuranScreen";
import DonationsScreen from "./screens/DonationsScreen";
import FormsScreen from "./screens/FormsScreen";
import AllChatsScreen from "./screens/AllChatsScreen";
import MessageChatScreen from "./screens/MessageChatScreen";
import ProfileScreen from "./screens/ProfilScreen";
import QiblaScreen from "./screens/QiblaScreen";
import SearchScreen from "./screens/SearchScreen";
import AnnouncementScreen from "./screens/AnnouncementScreen";
import SurahQuranScreen from "./screens/SurahQuranScreen";
import MosqueInfoScreen from "./screens/MosqueInfoScreen";

import ImamFeedScreen from "./screens/ImamFeedScreen";
import ImamAnnouncement from "./screens/ImamAnnouncement";
import ImamMosqueInfoScreen from "./screens/ImamMosqueInfoScreen";
import ImamProfileScreen from "./screens/ImamProfileScreen";
import ImamAllChatsScreen from "./screens/ImamAllChatsScreen";
import ImamMessageChatScreen from "./screens/ImamMessageChatScreen";
import Addpost from "./screens/Addpost";
import AddAnnouncement from "./screens/AddAnnouncement";
import DonatingScreen from "./screens/DonatingScreen";

import Camera from "./screens/Camera";
import ImagePicker from "./screens/ImagePicker";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const FirstScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/firstscreenimage.jpg")}
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgba(0,0,)",
      }}
    >
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(29,31,30,0.8)",
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
          onPress={() => navigation.navigate("ImamAuth")}
          style={{
            backgroundColor: "rgba(29,31,30,0.8)",
            justifyContent: "center",
            alignContent: "center",
            marginVertical: 300,
            height: 40,
            width: 100,
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
        <TouchableOpacity
          onPress={() => navigation.navigate("UserAuth")}
          style={{
            backgroundColor: "rgba(29,31,30,0.8)",
            justifyContent: "center",
            alignContent: "center",
            marginVertical: 300,
            height: 40,
            width: 100,
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
            User
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

const BottomTabUser = () => {
  return (
    <Tab.Navigator
      initialRouteName="Maps"
      activeColor="white"
      inactiveColor="silver"
      shifting={true}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Maps"
        component={UserMapScreen}
        options={{
          tabBarColor: "#607D8B",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-maps"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={UserFeedScreen}
        options={{
          tabBarColor: "#25B0C5",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BottomTabImam = () => {
  return (
    <Tab.Navigator
      initialRouteName="ImamFeedScreen"
      activeColor="white"
      inactiveColor="silver"
      shifting={true}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Feed"
        component={ImamFeedScreen}
        options={{
          tabBarColor: "#25B0C5",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Announcements"
        component={ImamAnnouncement}
        options={{
          tabBarColor: "#0F284F",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bullhorn" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen" headerMode="none">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="ImamAuth" component={ImamAuthPage} />
        <Stack.Screen name="UserAuth" component={UserAuthPage} />
        <Stack.Screen name="ImamSignup" component={ImamSignup} />
        <Stack.Screen name="ImamSignin" component={ImamSignin} />
        <Stack.Screen name="UserSignup" component={UserSignup} />
        <Stack.Screen name="UserSignin" component={UserSignin} />
        <Stack.Screen name="Maps" component={BottomTabUser} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="QuranScreen" component={QuranScreen} />
        <Stack.Screen name="DonationsScreen" component={DonationsScreen} />
        <Stack.Screen name="DonatingScreen" component={DonatingScreen} />
        <Stack.Screen name="FormsScreen" component={FormsScreen} />
        <Stack.Screen name="AllChatsScreen" component={AllChatsScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="QiblaScreen" component={QiblaScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="SurahQuranScreen" component={SurahQuranScreen} />
        <Stack.Screen name="MosqueInfoScreen" component={MosqueInfoScreen} />
        <Stack.Screen name="ImamFeedScreen" component={BottomTabImam} />
        <Stack.Screen name="ImamProfileScreen" component={ImamProfileScreen} />
        <Stack.Screen
          name="AnnouncementScreen"
          component={AnnouncementScreen}
        />
        <Stack.Screen name="ImamAnnouncement" component={ImamAnnouncement} />
        <Stack.Screen
          name="ImamMosqueInfoScreen"
          component={ImamMosqueInfoScreen}
        />
        <Stack.Screen name="MessageChatScreen" component={MessageChatScreen} />
        <Stack.Screen
          name="ImamAllChatsScreen"
          component={ImamAllChatsScreen}
        />
        <Stack.Screen
          name="ImamMessageChatScreen"
          component={ImamMessageChatScreen}
        />
        <Stack.Screen name="Addpost" component={Addpost} />
        <Stack.Screen name="AddAnnouncement" component={AddAnnouncement} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="ImagePicker" component={ImagePicker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
