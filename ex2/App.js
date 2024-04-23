import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6627c4bcb625bf088c09af64.mockapi.io/users`)
      .then((response) => {
        setUser(response.data);
        console.log("Data user: ", user);
      })
      .catch((error) => {
        console.log("error retrieving user: ", error);
      });
  }, []);

  const listUser = ({ item }) => (
    <TouchableOpacity
      style={{
        width: "90%",
        height: 150,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 20,
      }}
    >
      <View style={{ flex: 4, }}>
        <View
          style={{
            flex: 7,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={item.image}
            style={{ width: "80%", height: "80%", resizeMode: "contain" }}
          />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={item.star}
            style={{ width: "80%", height: " 80%", resizeMode: "contain" }}
          />
        </View>
      </View>
      <View style={{ flex: 6, justifyContent: "center" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: -10,
            marginLeft: 20,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            color: "gray",
            marginTop: 10,
            marginLeft: 20,
          }}
        >
          {item.info}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginTop: 10,
            marginLeft: 20,
          }}
        >
          {item.bio}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        keyExtractor={(item) => item.id}
        renderItem={listUser}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
