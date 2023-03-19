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

const DiscoverScreen = () => {
  // Adjusting navigation when layout was loaded; remove nav header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}
      {/* Second Section */}
      {/* Third Section */}
    </SafeAreaView>
  );
};

export default DiscoverScreen;
