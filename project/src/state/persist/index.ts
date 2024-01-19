import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { reducers } from "../reducers";
import { cartsReducer } from "../reducers/carts";

const { searcherReducer, fetchReducer, namesReducer } = reducers;

export const ignoredActions = [
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
];

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["searcherReducer", "fetchReducer", "namesReducer"],
};
export const rootReducer = combineReducers( {
    fetchReducer,
    searcherReducer,
    namesReducer,
    cartsReducer
} );
export const persistedReducer = persistReducer( persistConfig, rootReducer );
