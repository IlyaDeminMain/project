import storage from "redux-persist/lib/storage";
import {
    persistReducer,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { reducers } from "../reducers";
import { cartsReducer } from "../reducers/carts";


const { searcherReducer, axiosReducer } = reducers;


const persistConfig = {
    key: "root",
    storage,
    blacklist: ["searcherReducer", "fetchReducer"],
};

export const rootReducer = combineReducers( {
    axiosReducer,
    searcherReducer,
    cartsReducer,
} );
export const persistedReducer = persistReducer( persistConfig, rootReducer );
