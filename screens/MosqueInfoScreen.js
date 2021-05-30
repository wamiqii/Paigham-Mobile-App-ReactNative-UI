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

const MosqueInfoScreen = ({ navigation, route }) => {
  const [editdisable, seteditdisable] = useState(false);
  const [mosquename, setmosquename] = useState(route.params.mosquename);
  const [mosquedesc, setmosquedesc] = useState(route.params.mosquedesc);
  const [fajrtiming, setfajrtiming] = useState("03:21 AM");
  const [zuhrtiming, setzuhrtiming] = useState("12:05 PM");
  const [asrtiming, setasrtiming] = useState("05:02 PM");
  const [maghribtiming, setmaghribtiming] = useState("07:10 PM");
  const [ishatiming, setishatiming] = useState("08:49 PM");
  const [jummahtiming, setjummahtiming] = useState("01:35 PM");

  return (
    <View style={{ alignItems: "center", flex: 1, backgroundColor: "#F4F4F4" }}>
      <ScrollView style={{ width: "100%" }}>
        <View
          style={{
            backgroundColor: "#242424",
            height: "28%",
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
                marginRight: 105,
                letterSpacing: 1,
              }}
            >
              Mosque Info
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                marginVertical: 55,
                marginHorizontal: 25,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 23,
                  letterSpacing: 2,
                  textAlign: "center",
                }}
              >
                "{mosquename}"
              </Text>
              <Text
                style={{
                  color: "silver",
                  fontSize: 18,
                  fontStyle: "italic",
                  letterSpacing: 2,
                  textAlign: "center",
                }}
              >
                "{mosquedesc}"
              </Text>
            </View>
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
            Mosque Details
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
            Fajr
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
              placeholder={fajrtiming}
              onChangeText={(text) => setfajrtiming(text)}
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
            Dhuhr
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
              placeholder={zuhrtiming}
              onChangeText={(text) => setzuhrtiming(text)}
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
            Asr
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
              placeholder={asrtiming}
              onChangeText={(text) => setasrtiming(text)}
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
            Maghrib
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
              placeholder={maghribtiming}
              onChangeText={(text) => setmaghribtiming(text)}
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
            Isha
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
              placeholder={ishatiming}
              onChangeText={(text) => setishatiming(text)}
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
            Jummah
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
              placeholder={jummahtiming}
              onChangeText={(text) => setjummahtiming(text)}
              placeholderTextColor="#242424"
              editable={editdisable}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MosqueInfoScreen;
