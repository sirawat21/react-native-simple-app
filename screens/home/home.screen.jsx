import { SafeAreaView, Text } from "react-native";
import tw from "twrnc";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-md text-red-600`}>App Homepage</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
