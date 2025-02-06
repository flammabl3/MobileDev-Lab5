
import {Text, View, Button, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';

import Items from '../components/items';

export default function Index() {    
    const router = useRouter();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#fff',
        },
    });

    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>
            <Button title="Button!"/>
            <Items/>
            <Button onPress={() => { router.navigate('page/lab_3')}} title='Counter'/>
        </View> 


    );


}