import {useRouter} from 'expo-router';
import {View, Button} from 'react-native';

export default function Back() {
    const router = useRouter();
    const backPress = () => {
        router.back();
    };
    return (
        <View>
            <Button title="Back" onPress ={() => {backPress()}}/>
        </View>
    )
}