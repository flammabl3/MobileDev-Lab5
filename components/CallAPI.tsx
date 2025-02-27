import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";

export default function CallAPI() {
    interface Item {
        userId: number;
        id: number;
        title: string;
        body: string
    }
    const [data, setData] = useState(null);

    useEffect(() => {
        do_callAPI();
    }, []);

    const do_callAPI = async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch()
        .finally();
    }

    return(
        <View>
           <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.body}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}