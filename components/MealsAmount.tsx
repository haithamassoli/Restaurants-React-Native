import { useState } from "react";
import { View, Pressable, Text, TextInput } from "react-native";
import { Colors } from "../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

const MealsAmount = () => {
  const [number, onChangeNumber] = useState("1");
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        width: 125,
        backgroundColor: Colors.grayLighter,
        borderRadius: 10,
      }}
    >
      <Pressable
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          backgroundColor: Colors.grayLight,
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
        }}
        onPress={() => {
          if (+number !== 1) {
            onChangeNumber((+number - 1).toString());
          }
        }}
      >
        <FontAwesome5 name="minus" size={18} color={Colors.gray} />
      </Pressable>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <TextInput
          keyboardType="number-pad"
          onChangeText={onChangeNumber}
          value={number}
          maxLength={2}
          style={{ color: "black", fontSize: 22 }}
        />
      </View>
      <Pressable
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          backgroundColor: Colors.grayLight,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
        }}
        onPress={() => {
          onChangeNumber((+number + 1).toString());
        }}
      >
        <FontAwesome5 name="plus" size={16} color={Colors.primary} />
      </Pressable>
    </View>
  );
};

export default MealsAmount;
