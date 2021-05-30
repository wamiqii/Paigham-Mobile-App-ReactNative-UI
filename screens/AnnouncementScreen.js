import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

const AnnouncementScreen = ({ navigation }) => {
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
            marginRight: 85,
          }}
        >
          Announcements
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#DDDDDD",
                }}
                source={require("../assets/ImamDP.png")}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  Muhammad Ali
                </Text>
                <Text style={{ fontSize: 12, color: "#666" }}>1 hour ago</Text>
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
              Asr Timings changed. New Timings: 05:15 PM. JazakAllah.
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
              <TouchableOpacity
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
              </TouchableOpacity>
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
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#DDDDDD",
                }}
                source={require("../assets/ImamDP.png")}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  Ali Ahmed
                </Text>
                <Text style={{ fontSize: 12, color: "#666" }}>2 hour ago</Text>
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
              Tafseer e Quran at Mosque after Maghrib Namaz.
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
              <TouchableOpacity
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
              </TouchableOpacity>
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
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#DDDDDD",
                }}
                source={require("../assets/ImamDP.png")}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  Azeem Khan
                </Text>
                <Text style={{ fontSize: 12, color: "#666" }}>4 hour ago</Text>
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
              Taraweeh Timings Changed.
            </Text>
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
                  45 Likes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
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
                  10 Comments
                </Text>
              </TouchableOpacity>
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
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#DDDDDD",
                }}
                source={require("../assets/ImamDP.png")}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  Ahmer Farooq
                </Text>
                <Text style={{ fontSize: 12, color: "#666" }}>8 hour ago</Text>
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
              Namaz e Janazah at Mosque after Dhudr prayers.
            </Text>
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
                  10 Likes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
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
                  2 Comments
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

export default AnnouncementScreen;
