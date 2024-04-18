export const addRec = (state, payload) => {
  if (checkArray(state.items, payload.payload.id)) {
    return;
  }
  if (state.items.length >= 5) {
    state.items.shift();
    state.items.push(payload.payload);
    return;
  }
  if (state.items.length < 6) {
    state.items.push(payload.payload);
  }
};

const checkArray = (arr, id) => {
  return arr.map((item) => item.id).includes(id);
};
