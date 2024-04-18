export const addProduct = (state, payload) => {
  state.items.push(payload);
  localStorage.setItem("cart_items", JSON.stringify(state.items));
};
