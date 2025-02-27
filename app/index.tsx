import {Text, View, Button, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';

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
            <Button onPress={() => { router.navigate('./lab5/lab5')}}  title='Lab 5'/>
        </View> 
    );


}