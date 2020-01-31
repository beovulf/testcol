import { GET_PRODUCT, GET_PRODUCT_ERROR } from "./types";

import ApiService from "../services/ApiService";

// Get product

export const getProduct = id => async dispatch => {
  try {
    const res = await ApiService.getProduct(id);

    dispatch({
      type: GET_PRODUCT,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_ERROR,
      payload: err.response
    });
  }
};
