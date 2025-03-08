import { version } from 'mongoose';
import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productListReducer, productReducer } from './Reducers/Product';

const persistConfig = {
    key: 'root',
    storage,
    version: 1
}

const rootReducer = combineReducers({
    productListReducer,
    productReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export let persistor = persistStore(store);