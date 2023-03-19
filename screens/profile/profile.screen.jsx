import { withExpoSnack } from "nativewind";
import { View } from "react-native";
import { ButtonComponent, TextComponent } from "../../components";
import tw from "twrnc";

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-gray-300`}>
      <ButtonComponent
        onPress={() =>
          navigation.navigate("Home")
        }
        styled="bg-red-600 h-12 px-4 items-center justify-center rounded-md "
        title="Home"
      />
      <TextComponent styled="text-lg text-sky-700">
        Profile {route.params.name}
      </TextComponent>
    </View>
  );
};

export default ProfileScreen;
