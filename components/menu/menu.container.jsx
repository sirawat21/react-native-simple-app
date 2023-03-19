import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const Menu = ({ key, title, image, type, setType }) => {
  return (
    <TouchableOpacity className="items-center justify-center space-y-2">
      <View
        className={`w-24 h-24 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image className="w-full h-full object-contain" source={image}/>
      </View>
      <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Menu;
