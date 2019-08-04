import mockData from "./mock/mockdata";

export const filterRestaurantName = () => {
  let restaurantArray = [];
  mockData.forEach(item => {
    let itemObj = {
      name: item.SHOP_NAME,
      image: item.IMAGE
    };
    restaurantArray.push(itemObj);
  });
  return [...new Set(restaurantArray)];
};
export const formatPrice = price => {
  let s = price.replace(",", "");
  var i = parseInt(s, 10);
  return i;
};
