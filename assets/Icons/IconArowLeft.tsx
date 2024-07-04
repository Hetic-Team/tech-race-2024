import { View } from "react-native";
import Svg, { Path } from 'react-native-svg';

export default function IconArrowLeft() {

    return (
        <View>
            <Svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                <Path d="M9 1L1 9L9 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
        </View>
    );
};