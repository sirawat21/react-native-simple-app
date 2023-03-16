import { styled } from "nativewind";
import { withExpoSnack } from 'nativewind';
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

const StyledView = styled(View, 'flex-1 items-center justify-center bg-red');
const StyledText = styled(Text, 'font-bold text-red-500');

function App() {
  return (
    <StyledView>
      <StyledText>
        Have no incomming message yet.
      </StyledText>
    </StyledView>
  );
}

export default withExpoSnack(App);