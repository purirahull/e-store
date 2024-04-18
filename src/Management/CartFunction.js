export const addProduct = (state, payload) => {
  console.log(state);
  console.log(payload);
  state.items.push(payload);
  localStorage.setItem("cart_items", JSON.stringify(state.items));
};
