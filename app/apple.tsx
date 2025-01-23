import { View, Image } from "react-native";
import Back from '../components/back';

export default function Apple() {
    return (
        <View>
            <Image 
                source={
                    require('../assets/Red_Apple.jpg')
                }
            />
            <Back/>
        </View>
    )
}