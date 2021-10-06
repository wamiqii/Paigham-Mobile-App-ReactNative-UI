import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  Switch,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { MaterialIcons } from "@expo/vector-icons";

const UserMapScreen = ({ navigation, route }) => {
  // const [isModalVisible, setModalVisible] = useState(false);
  // const [profilename, setprofilename] = useState(route.params?.profile);

  const [mosquenamearray, setmosquenamearray] = useState([
    "Usman Block Mosque",
    "Jamia Masjid e Ali Murtaza",
    "Jamia Masjid Usmania",
    "Jamia Masjid AbuBakar",
    "Jamia Masjid Umer",
    "Jamia Masjid Syed Sajjad Haider",
    "Jamia Masjid Malik Riaz Hussain",
    "Jamia Masjid Rafi",
  ]);
  const [mosquedescarray, setmosquedescarray] = useState([
    "Street#28, Usman Block, Bahria Town Phase-8",
    "Street#29, Sector-D, Bahria Town Phase-8",
    "Bahria Safari Valley",
    "Abu Bakar Block, Bahria Town Phase-8",
    "Umer Block, Bahria Town Phase-8",
    "Bahria Town Phase-8",
    "Bahria Town Phase-8",
    "Rafi Block, Bahria Town Phase-8",
  ]);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  mapstyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#263c3f",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6b9a76",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#38414e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#212a37",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9ca5b3",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#1f2835",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#f3d19c",
        },
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#2f3948",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#515c6d",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
  ];

  return (
    <View>
      <View
        style={{
          backgroundColor: "#607D8B",
          height: "10%",
          flexDirection: "row",
        }}
      >
        <View>
          <TouchableOpacity
            style={{
              // backgroundColor: "rgba(29,31,30,0.2)",
              marginTop: 18,
              marginLeft: 155,
              borderRadius: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                fontSize: 45,
                padding: 10,
              }}
            >
              پیغام
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Text
          style={{
            color: "white",
            fontSize: 25,
            letterSpacing: 2,
            marginTop: 25,
            marginLeft: 90,
            marginRight: 50,
            justifyContent: "center",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Paigham
        </Text> */}
        <TouchableOpacity
          onPress={() => navigation.navigate("DashboardScreen")}
          style={{
            marginLeft: 120,
            marginRight: 50,
            alignSelf: "center",
            marginTop: 30,
          }}
        >
          <MaterialIcons name="dashboard" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        mapType="standard"
        customMapStyle={mapstyle}
        showsUserLocation={true}
        showsCompass={true}
        showsTraffic={true}
        showsMyLocationButton={true}
        loadingEnabled={true}
        followsUserLocation={true}
        initialRegion={{
          latitude: 33.48304,
          longitude: 73.091813,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: "100%",
          height: "90%",
          position: "relative",
        }}
      >
        <MapView.Marker
          onPress={() =>
            navigation.navigate("MosqueInfoScreen", {
              mosquename: mosquenamearray[0],
              mosquedesc: mosquedescarray[0],
            })
          }
          coordinate={{ latitude: 33.488847, longitude: 73.092413 }}
          icon={require("../assets/map-pin1.png")}
          title={mosquenamearray[0]}
          description={mosquedescarray[0]}
        />
        <MapView.Marker
          onPress={() =>
            navigation.navigate("MosqueInfoScreen", {
              mosquename: mosquenamearray[1],
              mosquedesc: mosquedescarray[1],
            })
          }
          coordinate={{ latitude: 33.491592, longitude: 73.090811 }}
          icon={require("../assets/map-pin1.png")}
          pinColor={"blue"}
          title={mosquenamearray[1]}
          description={mosquedescarray[1]}
        />
        <MapView.Marker
          onPress={() =>
            navigation.navigate("MosqueInfoScreen", {
              mosquename: mosquenamearray[2],
              mosquedesc: mosquedescarray[2],
            })
          }
          coordinate={{ latitude: 33.49081, longitude: 73.097112 }}
          icon={require("../assets/map-pin1.png")}
          pinColor={"blue"}
          title={mosquenamearray[2]}
          description={mosquedescarray[2]}
        />
        <MapView.Marker
          onPress={() =>
            navigation.navigate("MosqueInfoScreen", {
              mosquename: mosquenamearray[3],
              mosquedesc: mosquedescarray[3],
            })
          }
          coordinate={{ latitude: 33.497839, longitude: 73.097759 }}
          icon={require("../assets/map-pin1.png")}
          pinColor={"blue"}
          title={mosquenamearray[3]}
          description={mosquedescarray[3]}
        />
        <MapView.Marker
          onPress={() =>
            navigation.navigate("MosqueInfoScreen", {
              mosquename: mosquenamearray[4],
              mosquedesc: mosquedescarray[4],
            })
          }
          coordinate={{ latitude: 33.486916, longitude: 73.103329 }}
          icon={require("../assets/map-pin1.png")}
          pinColor={"blue"}
          title={mosquenamearray[4]}
          description={mosquedescarray[4]}
        />
        <MapView.Marker
          onPress={() =>
            navigation.navigate("MosqueInfoScreen", {
              mosquename: mosquenamearray[5],
              mosquedesc: mosquedescarray[5],
            })
          }
          coordinate={{ latitude: 33.486811, longitude: 73.078053 }}
          icon={require("../assets/map-pin1.png")}
          pinColor={"blue"}
          title={mosquenamearray[5]}
          description={mosquedescarray[5]}
        />
        <MapView.Marker
          onPress={() =>
            navigation.navigate("MosqueInfoScreen", {
              mosquename: mosquenamearray[6],
              mosquedesc: mosquedescarray[6],
            })
          }
          coordinate={{ latitude: 33.497795, longitude: 73.079745 }}
          icon={require("../assets/map-pin1.png")}
          pinColor={"blue"}
          title={mosquenamearray[6]}
          description={mosquedescarray[6]}
        />
        <MapView.Marker
          onPress={() =>
            navigation.navigate("MosqueInfoScreen", {
              mosquename: mosquenamearray[7],
              mosquedesc: mosquedescarray[7],
            })
          }
          coordinate={{ latitude: 33.504321, longitude: 73.102213 }}
          icon={require("../assets/map-pin1.png")}
          pinColor={"blue"}
          title={mosquenamearray[7]}
          description={mosquedescarray[7]}
        />
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
};

export default UserMapScreen;
