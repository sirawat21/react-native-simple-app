import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default function App() {
  const [message, setMessage] = useState();
  return (
    <View style={styles.container}>
      <Text>{ message || 'Have no incomming message yet.'}</Text>
      <TextInput 
        onChangeText={ (Text) => setMessage(Text) }
        placeholder="Message something here."/>
      <Button 
      title="Learn More" 
      onPress={() => Alert.alert('Clicked !!')}
      color="#841584"/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
