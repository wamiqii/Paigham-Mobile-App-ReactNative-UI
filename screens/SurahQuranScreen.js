import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const SurahQuranScreen = ({ navigation, route }) => {
  const [surahverse, setsurahverse] = useState([]);
  const [surahname, setsurahname] = useState("");
  const [surahmeaning, setsurahmeaning] = useState("");
  const [surahnumber, setsurahnumber] = useState(0);
  const [apiindex, setapiindex] = useState(route.params.index);
  const [arabicname, setarabicname] = useState(route.params.arabic);

  const fetchdata = () => {
    fetch(`http://api.alquran.cloud/v1/surah/${apiindex}`, {
      method: "GET",
      headers: {},
    })
      .then((result) => result.json())
      .then((resultJson) => {
        setsurahnumber(resultJson.data.number);
        setsurahverse(resultJson.data.ayahs);
        setsurahname(resultJson.data.englishName);
        setsurahmeaning(resultJson.data.englishNameTranslation);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <View style={{ alignItems: "center", flex: 1, backgroundColor: "#F4F4F4" }}>
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
              marginRight: 132,
              letterSpacing: 1,
            }}
          >
            Surah {surahnumber}
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 23,
              letterSpacing: 2,
              top: 50,
              fontWeight: "bold",
            }}
          >
            "{surahname}"
          </Text>
          <Text
            style={{
              color: "silver",
              fontSize: 18,
              fontStyle: "italic",
              letterSpacing: 2,
              top: 50,
            }}
          >
            "{arabicname}"
          </Text>
          <Text
            style={{
              color: "silver",
              fontSize: 15,
              fontStyle: "italic",
              letterSpacing: 2,
              top: 50,
            }}
          >
            "Meaning: {surahmeaning}"
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
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            width: "20%",
            textAlign: "center",
            paddingTop: 4,
            letterSpacing: 1,
          }}
        >
          Verses
        </Text>
      </View>
      <FlatList
        style={{
          height: "85%",
          width: "92%",
          top: 5,
          backgroundColor: "#DADADA",
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 11,
          },
          shadowOpacity: 0.57,
          shadowRadius: 15.19,
          elevation: 23,
        }}
        keyExtractor={(item, pass) => "Key" + pass}
        data={surahverse}
        renderItem={({ item }) => (
          <Text
            style={{
              fontSize: 28,
              borderBottomColor: "#AEAEAE",
              borderBottomWidth: 1,
              color: "#242424",
              margin: 10,
              paddingRight: 10,
            }}
          >
            {JSON.stringify(item.text).replace(/['"]+/g, "")} o
          </Text>
        )}
      />
    </View>
  );
};

export default SurahQuranScreen;
