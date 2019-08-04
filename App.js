/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import mockData from "./src/util/mock/mockdata";
import HorizontalList from "./src//component/HorizontalList";
import {
  filterRestaurantName,
  formatPrice,
  filterCategories
} from "./src/util/utils";
import { FlatGrid } from "react-native-super-grid";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.log(filterCategories());
    return (
      <View style={styles.container}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={styles.welcome}>Popular restaurants</Text>
            <Text style={styles.welcome}>View All</Text>
          </View>
          <HorizontalList restaurant={filterRestaurantName()} />
        </View>

        <View style={{ flex: 12 }}>
          <Text style={{ fontSize: 20 }}>Popular foods</Text>
          <FlatGrid
            itemDimension={130}
            items={mockData}
            renderItem={({ item }) => (
              <View style={{}}>
                <Image
                  style={{ height: 50 }}
                  source={{ uri: `${item.IMAGE}` }}
                />
                <Text style={{}}>{item.FOOD_NAME}</Text>
                <Text style={{}}>{item.SHOP_NAME}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{}}>
                    {formatPrice(item.PRICE.toString()) -
                      formatPrice(item.PRICE.toString()) * item.DISCOUNT * 0.01}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 5,
                      textDecorationLine: "line-through"
                    }}
                  >
                    {item.PRICE}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
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
