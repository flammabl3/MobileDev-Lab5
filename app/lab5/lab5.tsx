import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CallAPI from '../../components/CallAPI';

export default function Lab5() {    
    const [showData, setShowData] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#fff',
        },
    });

    return(
        <View>
            <Button onPress={() => setShowData(prev => !prev)}  title='Submit'/>
            {showData && <CallAPI/>}
        </View>
    )
}