import { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemScreen = () => {
  // Adjusting navigation when layout was loaded; remove nav header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <Text>item screen</Text>
    </View>
  );
};

export default ItemScreen;
