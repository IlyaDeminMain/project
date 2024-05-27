import storage from "redux-persist/lib/storage";
import {
    persistReducer,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { reducers } from "../reducers";


const { searcherReducer, axiosReducer, cartsReducer } = reducers;


const persistConfig = {
    key: "root",
    storage,
    blacklist: ["searcherReducer", "axiosReducer"],
};

export const rootReducer = combineReducers( {
    axiosReducer,
    searcherReducer,
    cartsReducer,
} );
export const persistedReducer = persistReducer( persistConfig, rootReducer );
