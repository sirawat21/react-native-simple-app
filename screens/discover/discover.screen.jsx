import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { Avatar } from "../../assets";
import { API_GOOGLE_PLACE } from "@env";
import { GooglePlacesInput, Menu } from "../../components";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const DiscoverScreen = () => {
  // Adjusting navigation when layout was loaded; remove nav header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative mt-12">
      {/* First Section */}
      {/* Title & Avatar */}
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px]">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            className="w-full h-full object-cover rounded-md"
            source={Avatar}
          />
        </View>
      </View>
      {/* Second Section */}
      {/* Search box */}
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesInput apiKey={API_GOOGLE_PLACE}/>
      </View>
      {/* Third Section */}
      {/* Menu Container */}
      <ScrollView>
        <View className="flex-row items-center justify-center px-8 mt-8">
        <Menu/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
