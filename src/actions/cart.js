import { GET_CART, UPDATE_CART, GET_CART_ERROR } from "./types";

import ApiService from "../services/ApiService";

// Get cart

export const getCart = () => async dispatch => {
  try {
    const res = await ApiService.getCart();

    dispatch({
      type: GET_CART,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: GET_CART_ERROR,
      payload: err.response
    });
  }
};

// Update cart

export const updateCart = product => async dispatch => {
  try {
    const res = await ApiService.updateCart(product);

    dispatch({
      type: UPDATE_CART,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: GET_CART_ERROR,
      payload: err.response
    });
  }
};
