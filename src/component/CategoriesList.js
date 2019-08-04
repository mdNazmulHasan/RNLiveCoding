import React from "react";
import { StyleSheet, FlatList, Text, View, Image } from "react-native";
const Categories = props => {
  return (
    <FlatList
      style={styles.listContainer}
      horizontal={true}
      data={props.categories}
      keyExtractor={index => index.toString()}
      renderItem={info => (
        <View style={{ margin: 20 }}>
          <Text style={{}}>{info.item.name}</Text>
          <Text style={{}}>{info.item.count}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default Categories;
