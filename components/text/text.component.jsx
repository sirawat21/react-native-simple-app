import { Text } from "react-native";
import { styled } from "nativewind";

// Styled Text component
const StyledText = styled(Text);

const MyText = ({childe, props}) => {
    return(<StyledText {...props}>{ childe }</StyledText>);
};

export default MyText;