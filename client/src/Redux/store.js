import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productListReducer, productReducer } from './Reducers/Product';
import { thunk } from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    version: 1
}

const rootReducer = combineReducers({
    productListReducer,
    productReducer
});

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(...middleware));

export let persistor = persistStore(store);