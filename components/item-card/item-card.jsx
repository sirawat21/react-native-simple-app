import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ItemCard = ({ key, image, title, location }) => {
  return (
    <TouchableOpacity className="rounded-md border-gray-300 space-y-2 px-3 py-2 shadow-md border-white w-[182px] my-2">
      <Image className="w-full h-40 rounded-md object-cover" source={image} />
      <Text className="text-[#428288] text-[18px] font-bold">
        {/* Check if title more than 12 characters then cut it */}
        {title?.length > 12 ? `${title.slice(0, 12)}...` : title} 
      </Text>
    </TouchableOpacity>
  );
};

export default ItemCard;
