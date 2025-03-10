import {
    PRODUCT_LIST_REQUEST
    , PRODUCT_LIST_REQUEST_SUCCESS
    , PRODUCT_LIST_REQUEST_FAIL
    , PRODUCT_DETAIL_REQUEST
    , PRODUCT_DETAIL_REQUEST_SUCCESS
    , PRODUCT_DETAIL_REQUEST_FAIL
} from "../Constants/Product";

//list of products
export const productListReducer = (state = { products: [] }, action) => {        
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case PRODUCT_LIST_REQUEST_SUCCESS:
            return { loading: false, products: action.payload, totalPage: action.payload.totalPage, page: action.payload.page };
        case PRODUCT_LIST_REQUEST_FAIL:
            return { loading: false, error: action.payload.error };
        default:
            return state;
    }
}

//single product by id
export const productReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading: true, ...state };
        case PRODUCT_DETAIL_REQUEST_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAIL_REQUEST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}