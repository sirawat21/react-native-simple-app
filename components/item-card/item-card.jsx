import { FontAwesome } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ItemCard = ({ key, image, title, location }) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md w-[182px] my-2">
      <Image className="w-full h-40 rounded-md object-cover" source={image} />
      <Text className="text-[#428288] text-[18px] font-bold">
        {/* Check if title more than 12 characters then cut it */}
        {title?.length > 12 ? `${title.slice(0, 12)}...` : title}
      </Text>
      <View className="flex-row space-x-2">
        <FontAwesome name="map-marker" size={20} color="#8597A2"/>
        <Text className="text-[#18637a] text-[14px] font-bold">
          {location?.length > 12 ? `${location.slice(0, 12)}...` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
