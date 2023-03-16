import { Button } from "react-native";
import { styled } from 'nativewind';

// Styled Button
const StyledButton = styled(Button);

const MyButton = (props) => {
    return(<StyledButton {...props} />);
};

export default MyButton;