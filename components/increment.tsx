import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type IncrementProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Increment: React.FC<IncrementProps> = ({ count, setCount }) => {
    return (
        <View style={styles.container}>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
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
        fontSize: 20,
        color: '#000',
        marginBottom: 10,
    },
});

export default Increment;