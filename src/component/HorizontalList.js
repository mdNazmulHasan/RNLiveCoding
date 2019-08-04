import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
const HorizontalList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.restaurant}
      renderItem={info => (
        <View>
          <Text>{info.item.name}</Text>
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
