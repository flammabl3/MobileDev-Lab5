import { View, Image } from "react-native";
import Back from '../components/back';

export default function Orange() {
    return (
        <View>
            <Image 
                source={
                    require('../assets/Orange_Mango.jpg')
                }
            />
            <Back></Back>
        </View>
    )
}