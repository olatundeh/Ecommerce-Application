import axios from 'axios';
import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_REQUEST_SUCCESS, 
    PRODUCT_LIST_REQUEST_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_REQUEST_SUCCESS,
    PRODUCT_DETAIL_REQUEST_FAIL
 } from '../Constants/Product';

 import { BASE_URL } from '../Constants/BASE_URL';

export const productListAction = () => async (dispatch) => {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    try {
        const { data } = await axios.get(`${BASE_URL}/api/products`);
        dispatch({ type: PRODUCT_LIST_REQUEST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_REQUEST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}

export const productAction = (id) => async (dispatch) => {        
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    try {
        const { data } = await axios.get(`${BASE_URL}/api/products/${id}`);
        dispatch({ type: PRODUCT_DETAIL_REQUEST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_DETAIL_REQUEST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}