export const addProduct = (state, payload) => {
  console.log(state);
  console.log(payload);
  state.items.push(payload);
};
