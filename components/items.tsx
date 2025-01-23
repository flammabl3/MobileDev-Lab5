import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Items() {
    let apple = {
        name: "apple",
        color: "red"
    }

    let orange = {
        name: "orange",
        color: "orange"
    }

    let mango = {
        name: "mango",
        color: "orange"
    }

    const router =  useRouter();

    const usePress = (url: string) => {
        router.push(url)
    };

    return (
        <View>
            <View>
                <Button title="Apple Pic" onPress={() => usePress('./apple')}/>
                <Text>Fruit: {apple.name}</Text>
                <Text>Color: {apple.color}</Text>
            </View>
            <View>
                <Button title="Orange Pic" onPress={() => usePress('./orange')}/>
                <Text>Fruit: {orange.name}</Text>
                <Text>Color: {orange.color}</Text>
            </View>
            <View>
                <Button title="Mango Pic" onPress={() => usePress('./mango')}/>
                <Text>Fruit: {mango.name}</Text>
                <Text>Color: {mango.color}</Text>
            </View>
        </View>
        

    );
}