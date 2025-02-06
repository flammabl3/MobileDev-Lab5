import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type DecrementProps = {
    count: number;
    setCount: (count : number) => void;
}

const Decrement: React.FC<DecrementProps> = ({ count, setCount }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.rdButton}><Text style={styles.text}>Decrement</Text></TouchableOpacity>
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
    rdButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        width: 100,
    }
});

export default Decrement;