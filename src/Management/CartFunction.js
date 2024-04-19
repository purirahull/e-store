export const addProduct = (state, payload) => {
  state.items.push(payload);
  localStorage.setItem("cart_items", JSON.stringify(state.items));
};

export const emptyCart = (state, payload) => {
  state.items.splice(0);
  localStorage.setItem("cart_items", "");
};
