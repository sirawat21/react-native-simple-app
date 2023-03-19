import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const Menu = ({ key, title, image, type, setType }) => {
  const handlerPress = () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      className="items-center justify-center space-y-3"
      onPress={handlerPress}
    >
      <View
        className={`w-24 p-2 h-24 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image className="w-full h-full object-contain" source={image} />
      </View>
      <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Menu;
