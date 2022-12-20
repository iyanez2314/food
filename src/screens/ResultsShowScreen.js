import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import Yelp from "../api/Yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);
  const getResult = async (id) => {
    const response = await Yelp.get(`/${id}`);
    const data = response.data;
    setResult(data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.photo} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
