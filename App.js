import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";
import { NavigationContainer } from '@react-navigation/native';
// import { MyButton, MyText } from "./components";

const App = () => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-md text-red-600`}>
        App Homepage
      </Text>
    </SafeAreaView>
  );
}

export default App;