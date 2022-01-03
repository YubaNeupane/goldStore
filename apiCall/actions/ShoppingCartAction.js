export const addToCart = (product) => {
  return { type: "ADD_PRODUCT_SHOPPING_CART", product: product };
};

export const clearCart = (product) => {
  return { type: "CLEAR_PRODUCT_SHOPPING_CART" };
};

export const handleQuanitiyChange = (id, value) => {
  return {
    type: "CHANGE_QUANITIY_PRODUCT_SHOPPING_CART",
    payload: { id, value },
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_PRODUCT_SHOPPING_CART",
    payload: id,
  };
};
