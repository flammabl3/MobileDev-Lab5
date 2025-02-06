
import {Text, View, Button} from 'react-native';
import { useRouter } from 'expo-router';

import Items from '../components/items';

export default function Index() {    
    const router = useRouter();

    return (
        <View>
            <Text>Welcome!</Text>
            <Button title="Button!"/>
            <Items/>
            <Button onPress={() => { router.navigate('page/lab_3')}} title='Counter'/>
        </View> 
    );
}