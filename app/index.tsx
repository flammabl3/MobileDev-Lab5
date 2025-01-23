
import {Text, View, Button} from 'react-native';

import Items from '../components/items';

export default function Index() {    
    return (
        <View>
            <Text>Welcome!</Text>
            <Button title="Button!"/>
            <Items></Items>
        </View> 
    );
}