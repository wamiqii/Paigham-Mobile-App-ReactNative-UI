import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "firebase";

import * as ImagePicker from "expo-image-picker";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ProfilScreen = ({ navigation }) => {
  const [profilephoto, setprofilephoto] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

  useEffect(() => {
    firebase
      .database()
      .ref("imams/" + firebase.auth().currentUser.uid)
      .once("value", (snapshot) => {
        setName(snapshot.child("name").val());
        setEmail(snapshot.child("email").val());
      });
  }, []);

  return (
    <View style={{ alignItems: "center", flex: 1, backgroundColor: "#F4F4F4" }}>
      <ScrollView style={{ width: "100%" }}>
        <View
          style={{
            backgroundColor: "#242424",
            height: 300,
            width: "100%",
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
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
            <TouchableOpacity
              onPress={() => navigation.goBack({ profile: name })}
            >
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
                marginRight: 140,
                letterSpacing: 1,
              }}
            >
              Profile
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                marginVertical: 55,
                marginHorizontal: 25,
                flexDirection: "row",
              }}
            >
              <FontAwesome
                style={{ marginRight: 15, margin: 3 }}
                name="user"
                size={24}
                color="white"
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 23,
                  letterSpacing: 2,
                }}
              >
                {name}
              </Text>
            </View>
            {profilephoto ? (
              <TouchableOpacity
                onPress={pickImage}
                style={{ marginVertical: 30, marginHorizontal: 35 }}
              >
                <Image
                  style={{ width: 85, height: 85, borderRadius: 50 }}
                  source={{ uri: profilephoto }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={pickImage}
                style={{
                  marginVertical: 30,
                  marginHorizontal: 35,
                  backgroundColor: "rgba(29,31,30,1)",
                  padding: 20,
                  borderRadius: 50,
                }}
              >
                <AntDesign
                  style={{
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                  name="user"
                  size={40}
                  color="white"
                />
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 21,
                letterSpacing: 2,
              }}
            >
              Followers
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 21,
                letterSpacing: 2,
              }}
            >
              Following
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 21,
                letterSpacing: 2,
                marginRight: 40,
              }}
            >
              10
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 21,
                letterSpacing: 2,
              }}
            >
              11
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 23,
              color: "#242424",
              fontWeight: "bold",
              borderBottomColor: "#242424",
              borderBottomWidth: 3,
              width: "90%",
              textAlign: "center",
              padding: 7,
              letterSpacing: 1,
            }}
          >
            Posts
          </Text>
        </View>

        <ScrollView>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
              padding: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#f8f8f8",
                width: "100%",
                marginBottom: 20,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  padding: 15,
                }}
              >
                {profilephoto ? (
                  <Image
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    source={{ uri: profilephoto }}
                  />
                ) : (
                  <Image
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    source={require("../assets/ImamDP.png")}
                  />
                )}
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {name}
                  </Text>
                  <Text style={{ fontSize: 12, color: "#666" }}>
                    1 hour ago
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  paddingLeft: 15,
                  paddingRight: 15,
                  marginBottom: 15,
                }}
              >
                Just completed my Quran API fetching
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../assets/feed1.jpg")}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  padding: 15,
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <Ionicons name="heart-outline" size={25} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "#333",
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    6 Likes
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <Ionicons name="md-chatbubble-outline" size={25} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "#333",
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    0 Comment
                  </Text>
                </TouchableOpacity> */}
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#f8f8f8",
                width: "100%",
                marginBottom: 20,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  padding: 15,
                }}
              >
                {profilephoto ? (
                  <Image
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    source={{ uri: profilephoto }}
                  />
                ) : (
                  <Image
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    source={require("../assets/ImamDP.png")}
                  />
                )}
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {name}
                  </Text>
                  <Text style={{ fontSize: 12, color: "#666" }}>
                    2 hour ago
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  paddingLeft: 15,
                  paddingRight: 15,
                  marginBottom: 15,
                }}
              >
                Completed documentation on time!!!
              </Text>
              <View
                style={{
                  borderBottomColor: "#dddddd",
                  borderBottomWidth: 1,
                  width: "92%",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  padding: 15,
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <Ionicons name="heart-outline" size={25} color="red" />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "#333",
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    15 Likes
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <Ionicons name="md-chatbubble-outline" size={25} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "#333",
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    3 Comments
                  </Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </ScrollView>

        {/* <View style={{ width: "100%", alignItems: "center", height: "20%" }}>
          <Text
            style={{
              fontSize: 18,
              color: "#242424",
              fontWeight: "bold",
              width: "90%",
              padding: 5,
              letterSpacing: 1,
              margin: 5,
            }}
          >
            Name
          </Text>
          <View
            style={{
              backgroundColor: "#DFDFDF",
              width: "100%",
              padding: 8,
              alignSelf: "flex-start",
              marginLeft: 25,
              borderRadius: 5,
            }}
          >
            <TextInput
              style={{ fontSize: 16, color: "#242424" }}
              placeholder={name}
              // onChangeText={(text) => setname(text)}
              placeholderTextColor="#242424"
              // editable={editdisable}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              color: "#242424",
              fontWeight: "bold",
              width: "90%",
              padding: 5,
              letterSpacing: 1,
              margin: 5,
            }}
          >
            Email
          </Text>
          <View
            style={{
              backgroundColor: "#DFDFDF",
              width: "90%",
              padding: 8,
              alignSelf: "flex-start",
              marginLeft: 25,
              borderRadius: 5,
            }}
          >
            <TextInput
              style={{ fontSize: 16, color: "#242424" }}
              placeholder={email}
              // onChangeText={(text) => setemail(text)}
              placeholderTextColor="#242424"
              // editable={editdisable}
            />
          </View>

          <TouchableOpacity style={{ alignSelf: "flex-start" }}>
            <Text
              style={{
                fontSize: 15,
                color: "#44A8D6",
                fontWeight: "bold",
                width: "90%",
                padding: 5,
                letterSpacing: 1,
                margin: 10,
                marginLeft: 20,
              }}
            >
              Reset your password? Click here!
            </Text>
          </TouchableOpacity>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              onPress={() => seteditdisable(true)}
              style={{ alignSelf: "center", margin: 10 }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#B92929",
                  fontWeight: "bold",
                  padding: 8,
                  textAlign: "center",
                  letterSpacing: 1,
                  borderColor: "#B92929",
                  borderWidth: 2.5,
                  borderRadius: 8,
                }}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => seteditdisable(false)}
              style={{ alignSelf: "center", margin: 10 }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#388E3C",
                  fontWeight: "bold",
                  padding: 8,
                  textAlign: "center",
                  letterSpacing: 1,
                  borderColor: "#388E3C",
                  borderWidth: 2.5,
                  borderRadius: 8,
                }}
              >
                Save Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
};

export default ProfilScreen;
