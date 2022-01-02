export const addToCart = (product) => {
  return { type: "ADD_PRODUCT_SHOPPING_CART", product: product };
};

export const clearCart = (product) => {
  return { type: "CLEAR_PRODUCT_SHOPPING_CART" };
};
