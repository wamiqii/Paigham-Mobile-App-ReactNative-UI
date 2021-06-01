import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Ionicons } from "@expo/vector-icons";

export default function ImagePickerExample({ navigation }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "rgba(29,31,30,0.4)",
          height: 40,
          flexDirection: "row",
          borderRadius: 10,
          top: -370,
          alignSelf: "flex-start",
        }}
      >
        <Ionicons
          name="return-down-back-outline"
          size={24}
          color="white"
          style={{ paddingLeft: 10, marginTop: 8 }}
        />
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 20,
            padding: 15,
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ marginRight: 10 }}>
          <Button
            color="darkgreen"
            title="Open Camera"
            onPress={() => {
              navigation.navigate("Camera");
            }}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Button color="red" title="Select Image" onPress={pickImage} />
        </View>
      </View>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}
