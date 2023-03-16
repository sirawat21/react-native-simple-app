import { View } from "react-native";
import { withExpoSnack, styled } from 'nativewind';
import { MyButton, MyText } from "./components";

// Creating styled components
const StyledView = styled(View);

// Event handlering functions
const firstButtonOnPress = () => alert('It has clicked.');

const App = () => {
  return (
    <StyledView className="flex-1 items-center justify-center bg-slate-400">
      <MyText className="font-bold text-green-500">TailwindCSS applied style.</MyText>
      <MyButton 
        className="rounded-md bg-indigo-600 py-1.5 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onPress={firstButtonOnPress}
        title="Learn More"/>
    </StyledView>
  );
}

export default withExpoSnack(App);