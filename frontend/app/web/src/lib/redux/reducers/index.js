import { createStore } from "redux";

function reducer(state = { items: [] }, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        items: [...state.items, action.payload.item]
      }

    default:
      return state;
  }
}

export function addToCart(item) {
  return {
    type: "ADD_TO_CART",
    payload: { item },
  };
}

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
