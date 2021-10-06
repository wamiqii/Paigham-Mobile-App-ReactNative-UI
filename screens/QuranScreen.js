import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const QuranScreen = ({ navigation }) => {
  const [surahdata, setsurahdata] = useState([]);
  const [searchdata, setsearchdata] = useState([]);
  // const [surahindex, setsurahindex] = useState(0);
  const [tryvar, settryvar] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchdata = () => {
    setsurahdata([]);
    setLoader(true);
    fetch(
      "https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json",
      {
        method: "GET",
        headers: {},
      }
    )
      .then((result) => result.json())
      .then((resultJson) => {
        for (let i = 0; i <= 113; i++) {
          setsurahdata((prev) => [...prev, resultJson[i]]);
          settryvar((prev) => [...prev, resultJson[i].title]);
        }
        setLoader(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handlesearch = (e) => {
    setsearchdata(() => tryvar.filter((i) => i.match(e)));
  };

  const searchquery = (item) => {
    if (searchdata.includes(item.title) || searchdata.length == 0) {
      return (
        <View
          key={Math.random()}
          style={{
            alignItems: "center",
            flexDirection: "row",
            borderBottomWidth: 2,
            borderBottomColor: "#B7AA9E",
            borderRadius: 50,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SurahQuranScreen", {
                index: item.index,
                arabic: item.titleAr,
              })
            }
            style={{
              width: "80%",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 50,
                color: "#B7AA9E",
                textAlign: "left",
              }}
            >
              "{item.title}"
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                marginTop: 5,
                color: "#B7AA9E",
                textAlign: "right",
                left: 30,
              }}
            >
              "{item.titleAr}"
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <ImageBackground
      source={require("../assets/surahs.jpg")}
      blurRadius={2}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          alignSelf: "center",
          width: "90%",
          borderBottomColor: "#AEA297",
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
              color="#AEA297"
            />
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#AEA297",
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            padding: 7,
            marginRight: 110,
          }}
        >
          Holy Qur'an
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "rgba(36,37,36,0.5)",
          borderColor: "#51372D",
          borderWidth: 2,
          height: "89%",
          width: "90%",
          left: 20,
          top: 10,
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
      >
        {loader ? (
          <View
            style={{
              backgroundColor: "rgba(29,31,30,0.4)",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 250,
              height: 220,
              width: 220,
              borderRadius: 30,
            }}
          >
            <View>
              <TouchableWithoutFeedback
                style={{
                  backgroundColor: "rgba(29,31,30,0.5)",
                  // marginTop: 150,
                  borderRadius: 100,
                  width: "50%",
                }}
              >
                <Text
                  style={{
                    color: "#B7AA9E",
                    alignSelf: "center",
                    fontSize: 55,
                    padding: 25,
                  }}
                >
                  قرآن
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <ActivityIndicator color="#B7AA9E" size="small" />
          </View>
        ) : (
          <View>
            <Text
              style={{
                color: "#B7AA9E",
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 8,
                borderBottomWidth: 3,
                borderBottomColor: "#B7AA9E",
                borderRadius: 5,
                width: "40%",
                alignSelf: "center",
              }}
            >
              Surah Index
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <FontAwesome
                name="search"
                size={20}
                color="#B7AA9E"
                style={{ right: -25, top: 1 }}
              />
              <TextInput
                placeholder="Search Surah"
                placeholderTextColor="#B7AA9E"
                onChangeText={handlesearch}
                style={{
                  alignSelf: "center",
                  fontSize: 22,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "#B7AA9E",
                  borderRadius: 5,
                  padding: 7,
                  width: "80%",
                  color: "#B7AA9E",
                  left: -8,
                }}
              />
            </View>
            <FlatList
              style={{ height: "85%" }}
              keyExtractor={(item, pass) => "Key" + pass}
              data={surahdata}
              renderItem={({ item }) => searchquery(item)}
            />
          </View>
        )}
      </View>

      <StatusBar style="light" />
    </ImageBackground>
  );
};

export default QuranScreen;
