import { Text } from "react-native";
import tw from 'twrnc';

const TextComponent = ({styled, children}) => {
    return(<Text style={tw.style(styled)}>{ children }</Text>);
};

export default TextComponent;