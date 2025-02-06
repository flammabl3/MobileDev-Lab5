import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

type IncrementProps = {
    count: number;
    setCount: (count : number) => void;
}

const Increment: React.FC<IncrementProps> = ({ count, setCount }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.grButton}><Text style={styles.text}>Increment</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    grButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        width: 100,
    }
});

export default Increment;