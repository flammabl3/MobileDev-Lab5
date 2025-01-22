import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import vacation_location, { vacation_price } from "./app/vacations";

export default function App() {
  type Person = {
    names: string;
    age: number;
    occupation: string;
    isEmployed: boolean;
    hobbies: (string | number)[];
    address: { street: string; city: string; state: string };
    vacation_location_value?: string;
    vacation_price_value?: string;
  };

  interface PersonInterface {
    names: string;
    age: number;
    occupation: string;
    isEmployed: boolean;
    hobbies: (string | number)[];
    address: { street: string; city: string; state: string };
  }

  const name: string = "John Doe";
  let occupation: string = "Software Developer";
  const age: number = 30;
  let isEmployed: boolean = true;
  const hobbies: (string | number)[] = ["Reading", "Coding", "Traveling", 4];
  const address: { street: string; city: string; state: string } = {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
  };
  const secondAddress = {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
  } as typeof address;

  const person1: PersonInterface = {
    names: name,
    age,
    occupation,
    isEmployed,
    hobbies,
    address,
  };

  const person2: Person = {
    names: "Jane Doe",
    age: 25,
    occupation: "Nurse",
    isEmployed: true,
    hobbies: ["Reading", "Traveling"],
    address: { street: "123 Main Street", city: "New York", state: "NY" },
    vacation_location_value: vacation_location("Paris"),
    vacation_price_value: vacation_price(500, "Paris"),
  };

  const personlist = [person1, person2];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to my application</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Hello {person2.names}. {person2.vacation_location_value}.
          {person2.vacation_price_value}
        </Text>
      </View>

      <View>
        {" "}
        <TouchableOpacity
          onPress={() => {
            alert("weekend is the best");
          }}
        >
          <Text>Click me</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#00007f",
    fontSize: 16,
  },
});
