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
import Modal from "react-native-modal";
import { FAB } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ImamAnnouncement = ({ navigation }) => {
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  return (
    <View>
      <View
        style={{
          backgroundColor: "#0F284F",
          height: "10%",
          flexDirection: "row",
        }}
      >
        {/* <View style={{ flex: 1 }}>
          <Modal
            backdropColor="black"
            animationIn="slideInDown"
            animationOut="fadeOutUp"
            backdropOpacity={0.9}
            isVisible={isModalVisible}
            style={{ height: "50%" }}
          >
            <View
              style={{ flex: 1, backgroundColor: "transparent", height: "50%" }}
            >
              <View
                style={{
                  backgroundColor: "#B0B0B0",
                  height: "24%",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: "80%",
                    alignSelf: "center",
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    padding: 5,
                  }}
                >
                  About
                </Text>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 7,
                  }}
                >
                  <Image
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 50,
                      backgroundColor: "#E8E8E8",
                    }}
                    source={require("../assets/ImamDP.png")}
                  />
                </View>
                <Text
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    textAlign: "center",
                    fontSize: 22,
                  }}
                >
                  Muhammad Ali
                </Text>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: "80%",
                    alignSelf: "center",
                  }}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate("ImamAllChatsScreen")}
                  style={{
                    backgroundColor: "#1B1B1B",
                    width: "80%",
                    justifyContent: "center",
                    alignSelf: "center",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      padding: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Chats
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: "#B0B0B0",
                  height: "39%",
                  marginVertical: 20,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: "80%",
                    alignSelf: "center",
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    padding: 5,
                  }}
                >
                  Settings
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ImamProfileScreen")}
                  style={{
                    backgroundColor: "#1B1B1B",
                    width: "80%",
                    justifyContent: "center",
                    alignSelf: "center",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      padding: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Profile
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: "80%",
                    alignSelf: "center",
                  }}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate("ImamMosqueInfoScreen")}
                  style={{
                    backgroundColor: "#1B1B1B",
                    width: "80%",
                    justifyContent: "center",
                    alignSelf: "center",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      padding: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Edit Mosque Info
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: "80%",
                    alignSelf: "center",
                  }}
                />
                <View
                  style={{
                    backgroundColor: "#1B1B1B",
                    width: "80%",
                    justifyContent: "center",
                    alignSelf: "center",
                    borderRadius: 10,
                    marginVertical: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 7,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      padding: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Notifications
                  </Text>
                  <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} />
                </View>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: "80%",
                    alignSelf: "center",
                  }}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate("FirstScreen")}
                  style={{
                    backgroundColor: "#1B1B1B",
                    width: "80%",
                    justifyContent: "center",
                    alignSelf: "center",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      padding: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={toggleModal}>
                <FontAwesome
                  name="close"
                  size={30}
                  color="white"
                  style={{ textAlign: "center" }}
                />
              </TouchableOpacity>
            </View>
          </Modal>
        </View> */}
        <TouchableOpacity
          // onPress={toggleModal}
          style={{ marginTop: 35, marginLeft: 10, marginRight: 10 }}
        >
          <Image
            style={{
              width: 45,
              height: 45,
              borderRadius: 50,
              backgroundColor: "#E8E8E8",
            }}
            source={require("../assets/ImamDP.png")}
          />
        </TouchableOpacity>
        <Text
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
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("DashboardScreen")}
          style={{
            marginLeft: 60,
            marginRight: 50,
            alignSelf: "center",
            marginTop: 30,
          }}
        >
          <MaterialIcons name="dashboard" size={35} color="white" />
        </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => navigation.navigate("AddAnnouncement")}
            style={{
              backgroundColor: "#f8f8f8",
              padding: 12,
              width: "70%",
              borderRadius: 20,
              borderColor: "#0F284F",
              borderWidth: 2,
            }}
          >
            <Text style={{ fontSize: 18, textAlign: "center" }}>
              Create a new Announcement
            </Text>
          </TouchableOpacity>
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
      <View style={{ justifyContent: "flex-end" }}>
        <View
          style={{
            flex: 1,
            bottom: -740,
          }}
        >
          <FAB
            style={{
              position: "absolute",
              margin: 16,
              right: 0,
              bottom: 0,
              backgroundColor: "#0F284F",
              padding: 2,
            }}
            color="white"
            large
            icon="account-search"
            onPress={() => navigation.navigate("SearchScreen")}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default ImamAnnouncement;
