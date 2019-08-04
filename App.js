/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import mockData from "./src/util/mock/mockdata";
import HorizontalList from "./src//component/HorizontalList";
import { filterRestaurantName } from "./src/util/utils";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.inputRef = {};
    this.state = {
      restaurantData: [
        {
          name: "temp1"
        },
        {
          name: "temp2"
        }
      ]
    };
  }
  render() {
    console.log(filterRestaurantName());
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.welcome}>Popular restaurants</Text>
          <Text style={styles.welcome}>View All</Text>
        </View>
        <HorizontalList restaurant={this.state.restaurantData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
