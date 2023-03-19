import { withExpoSnack } from "nativewind";
import { View } from "react-native";
import { ButtonComponent, TextComponent } from "../../components";
import tw from "twrnc";

// Event handlering functions
const firstButtonOnPress = () => alert("It has clicked.");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-gray-300`}>
      <ButtonComponent
        onPress={() => navigation.navigate('Profile', {name: 'Annoymous User'}) }
        styled="bg-red-600 h-12 px-4 items-center justify-center rounded-md "
        title="Profile"
      />
      <TextComponent styled="text-lg text-blue-700">
        Render UI with TailwindCSS applied style.
      </TextComponent>
      <ButtonComponent
        onPress={firstButtonOnPress}
        styled="bg-red-600 h-12 px-4 items-center justify-center rounded-md "
        title="Submit"
      />
    </View>
  );
};

export default HomeScreen;
