import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { HeroImage } from "../../assets";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const HomeScreen = () => {
  // Adjusting navigation when layout was loaded; remove nav header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      {/* First Section */}
      <View className="flex-row px-6 ios:mt-8 android:mt-12 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BC99] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          Make the most of your trip and create some wonderful memories that
          you'll remember for a lifetime.
        </Text>
      </View>
      {/* Third Section */}
      {/* Curcle */}
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute ios:-bottom-28 android:-bottom-32 -left-36"></View>
      {/* Image */}
      <View className="flex-1 relative items-center justify-center">
        {/* Applied animation for image */}
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />
        {/* Middle Button */}
        {/* TouchableOpacity willl make it blink when it clicked */}
        <TouchableOpacity className="absolute bottom-20 w-24 h-24 border-l-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          {/* Applied animation for a custom view(middle button) */}
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            interationCount={"infinite"}
            className="w-20 h-20 rounded-full items-center justify-center bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[35px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
