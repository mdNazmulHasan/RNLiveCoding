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
