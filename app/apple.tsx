import { View, Image } from "react-native";

export default function Apple() {
    return (
        <View>
            <Image 
                source={
                    require('../assets/Red_Apple.jpg')
                }
            />
        </View>
    )
}