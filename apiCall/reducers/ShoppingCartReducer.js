const initialState = {
  count: 0,
  items: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_SHOPPING_CART":
      const addedProduct = action.product._id;
      //   const prodPrice = addedProduct.price;
      //   const productWeight = addedProduct.weight;
      if (state.items[addedProduct]) {
        return { ...state };
      }

      const newItem = {
        [addedProduct]: addedProduct,
      };

      return {
        ...state,
        items: { ...state.items, addedProduct },
        count: state.count + 1,
      };
  }
  return state;
};
