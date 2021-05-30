import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import * as OpenAnything from "react-native-openanything";
import FileSystem from "react-native-filesystem";

import { Ionicons } from "@expo/vector-icons";
import { Card, Title, Button } from "react-native-paper";

const FormsScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/FormInsideBG.jpg")}
      style={{ flex: 1 }}
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
            marginRight: 145,
          }}
        >
          Forms
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 5,
            marginTop: 20,
          }}
        >
          <Card
            style={{
              width: "60%",
              margin: 25,
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
            <Card.Content style={{ backgroundColor: "#1B1B1B" }}>
              <Title
                style={{
                  color: "#D5D5D5",
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                Nikkah Form
              </Title>
            </Card.Content>
            <Card.Actions
              style={{
                backgroundColor: "#1B1B1B",
                justifyContent: "center",
              }}
            >
              <Button
                onPress={() =>
                  OpenAnything.Pdf(
                    "http://embassyofpakistanusa.org/wp-content/uploads/2019/10/NikahNama.pdf"
                  )
                }
                color="lightblue"
                style={{ backgroundColor: "#1B1B1B" }}
              >
                View
              </Button>
            </Card.Actions>
          </Card>

          <Card
            style={{
              width: "60%",
              margin: 25,
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
            <Card.Content style={{ backgroundColor: "#1B1B1B" }}>
              <Title
                style={{
                  color: "#D5D5D5",
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                Divorce Form
              </Title>
            </Card.Content>
            <Card.Actions
              style={{
                backgroundColor: "#1B1B1B",
                justifyContent: "center",
              }}
            >
              <Button
                onPress={() =>
                  OpenAnything.Pdf(
                    "https://drive.google.com/file/d/1KD6qiKizU5BJKJowtJUtsgGCZQ_1OBsY/view?usp=sharing"
                  )
                }
                color="lightblue"
                style={{ backgroundColor: "#1B1B1B" }}
              >
                View
              </Button>
            </Card.Actions>
          </Card>

          <Card
            style={{
              width: "60%",
              margin: 25,
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
            <Card.Content style={{ backgroundColor: "#1B1B1B" }}>
              <Title
                style={{
                  color: "#D5D5D5",
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                Domicile Form
              </Title>
            </Card.Content>
            <Card.Actions
              style={{
                backgroundColor: "#1B1B1B",
                justifyContent: "center",
              }}
            >
              <Button
                onPress={() =>
                  OpenAnything.Pdf(
                    "https://drive.google.com/file/d/1tVsb5DXHdwbrqw0mWO0jnW0daW1qJRIs/view?usp=sharing"
                  )
                }
                color="lightblue"
                style={{ backgroundColor: "#1B1B1B" }}
              >
                View
              </Button>
            </Card.Actions>
          </Card>

          <Card
            style={{
              width: "60%",
              margin: 25,
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
            <Card.Content style={{ backgroundColor: "#1B1B1B" }}>
              <Title
                style={{
                  color: "#D5D5D5",
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                B-Form
              </Title>
            </Card.Content>
            <Card.Actions
              style={{
                backgroundColor: "#1B1B1B",
                justifyContent: "center",
              }}
            >
              <Button
                onPress={() =>
                  OpenAnything.Pdf(
                    "https://drive.google.com/file/d/1b0SvOeQGwbKtrbyw28KEz0ALaF8JEGPH/view?usp=sharing"
                  )
                }
                color="lightblue"
                style={{ backgroundColor: "#1B1B1B" }}
              >
                View
              </Button>
            </Card.Actions>
          </Card>

          <Card
            style={{
              width: "60%",
              margin: 25,
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
            <Card.Content style={{ backgroundColor: "#1B1B1B" }}>
              <Title
                style={{
                  color: "#D5D5D5",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Birth Certificate Form
              </Title>
            </Card.Content>
            <Card.Actions
              style={{
                backgroundColor: "#1B1B1B",
                justifyContent: "center",
              }}
            >
              <Button
                onPress={() =>
                  OpenAnything.Pdf(
                    "https://drive.google.com/file/d/1nXw5DLU6qJQvofHtTpiQBPXly7oDt6oE/view?usp=sharing"
                  )
                }
                color="lightblue"
                style={{ backgroundColor: "#1B1B1B" }}
              >
                View
              </Button>
            </Card.Actions>
          </Card>

          <Card
            style={{
              width: "60%",
              margin: 25,
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
            <Card.Content style={{ backgroundColor: "#1B1B1B" }}>
              <Title
                style={{
                  color: "#D5D5D5",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Death Certificate Form
              </Title>
            </Card.Content>
            <Card.Actions
              style={{
                backgroundColor: "#1B1B1B",
                justifyContent: "center",
              }}
            >
              <Button
                onPress={() =>
                  OpenAnything.Pdf(
                    "https://drive.google.com/file/d/154dmvLNrs7ifTXDjiYL4YytkxSNTJ7lQ/view?usp=sharing"
                  )
                }
                color="lightblue"
                style={{ backgroundColor: "#1B1B1B" }}
              >
                View
              </Button>
            </Card.Actions>
          </Card>

          <Card
            style={{
              width: "60%",
              margin: 25,
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
            <Card.Content style={{ backgroundColor: "#1B1B1B" }}>
              <Title
                style={{
                  color: "#D5D5D5",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Power Of Attorney Form
              </Title>
            </Card.Content>
            <Card.Actions
              style={{
                backgroundColor: "#1B1B1B",
                justifyContent: "center",
              }}
            >
              <Button
                onPress={() =>
                  OpenAnything.Pdf(
                    "https://drive.google.com/file/d/1NQouGNjoMJZ1BL0UXxng_R5l8q4q6dg_/view?usp=sharing"
                  )
                }
                color="lightblue"
                style={{ backgroundColor: "#1B1B1B" }}
              >
                View
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default FormsScreen;
