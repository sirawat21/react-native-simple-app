import { Button } from "react-native";
import tw from 'twrnc';

const ButtonComponent = ({styled, title, onPress}) => {
    return(<Button style={tw.style(styled)} title={title} onPress={onPress} />);
};
export default ButtonComponent;
