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
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const ProfilScreen = ({ navigation }) => {
  const [editdisable, seteditdisable] = useState(false);
  const [name, setname] = useState("Wamiq Waheed");
  const [username, setusername] = useState("wamiqii");
  const [email, setemail] = useState("wamiqii18@gmail.com");
  const [pno, setpno] = useState("+923365104567");
  const [dob, setdob] = useState("12/10/1999");
  const [address, setaddress] = useState("Bahria Town Phase 8");

  return (
    <View style={{ alignItems: "center", flex: 1, backgroundColor: "#F4F4F4" }}>
      <ScrollView style={{ width: "100%" }}>
        <View
          style={{
            backgroundColor: "#242424",
            height: "25%",
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
            <TouchableOpacity
              onPress={() => navigation.navigate("ImagePicker")}
              style={{ marginVertical: 30, marginHorizontal: 35 }}
            >
              <Image
                style={{ width: 85, height: 85, borderRadius: 50 }}
                source={require("../assets/userdisplay.jpg")}
              />
            </TouchableOpacity>
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
            Profile Details
          </Text>
        </View>
        <View style={{ width: "100%", alignItems: "center", height: "20%" }}>
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
              placeholder="Wamiq Waheed"
              onChangeText={(text) => setname(text)}
              placeholderTextColor="#242424"
              editable={editdisable}
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
            Username
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
              placeholder="wamiqii"
              onChangeText={(text) => setusername(text)}
              placeholderTextColor="#242424"
              editable={editdisable}
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
              placeholder="wamiqii18@gmail.com"
              onChangeText={(text) => setemail(text)}
              placeholderTextColor="#242424"
              editable={editdisable}
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
            Phone No.
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
              keyboardType="phone-pad"
              placeholder="+923365104567"
              onChangeText={(text) => setpno(text)}
              placeholderTextColor="#242424"
              editable={editdisable}
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
            D.O.B
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
              placeholder="12/10/1999"
              onChangeText={(text) => setdob(text)}
              placeholderTextColor="#242424"
              editable={editdisable}
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
            Address
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
              placeholder="Bahria Town Phase 8"
              onChangeText={(text) => setaddress(text)}
              placeholderTextColor="#242424"
              editable={editdisable}
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
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilScreen;
