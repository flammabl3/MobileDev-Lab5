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
        <View>
            <Button onPress={() => { router.navigate('page/lab_3')}}  title='Lab 5'/>
        </View> 
    );


}