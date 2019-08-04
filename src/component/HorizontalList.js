import React from "react";
import { StyleSheet, FlatList, Text, View, Image } from "react-native";
const HorizontalList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      horizontal={true}
      data={props.restaurant}
      keyExtractor={index => index.toString()}
      renderItem={info => (
        <View style={{ margin: 20 }}>
          <Image
            style={{ height: 50 }}
            source={{ uri: `${info.item.image}` }}
          />
          <Text style={{}}>{info.item.name}</Text>
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

export default HorizontalList;
