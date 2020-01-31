import { GET_CART, GET_CART_ERROR, UPDATE_CART } from "../actions/types";

const initialState = {
  cart: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  const { cart } = state;

  switch (type) {
    case GET_CART:
      return {
        ...state,
        cart: payload,
        loading: false
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: [payload, ...cart],
        loading: false
      };
    case GET_CART_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
