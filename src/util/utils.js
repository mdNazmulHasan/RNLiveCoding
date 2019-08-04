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

export const filterCategories = () => {
  let categories = [];
  for (i = 0; i < mockData.length; i++) {
    let singleCategories = {};
    let name = mockData[i].CATEGORY.NAME;
    let count = 0;
    for (j = 0; j < mockData.length; j++) {
      if (mockData[i].CATEGORY.NAME === mockData[j].CATEGORY.NAME) {
        count++;
      }
    }
    singleCategories = {
      name,
      count
    };
    if (!ifAlreadyExistInArray(singleCategories.name, categories)) {
      categories.push(singleCategories);
    }
  }
  return [...new Set(categories)];
};
const ifAlreadyExistInArray = (data, dataCollection) => {
  let found = false;
  dataCollection.forEach(item => {
    if (item.name === data) {
      found = true;
      return found;
    }
  });
  return found;
};
