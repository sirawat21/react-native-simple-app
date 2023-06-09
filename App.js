import { LogBox } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { MyButton, MyText } from "./components";
import { HomeScreen, DiscoverScreen, ItemScreen } from "./screens";

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Discover" component={DiscoverScreen}/>
        <Stack.Screen name="Item" component={ItemScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
