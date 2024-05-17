import { configureStore } from "@reduxjs/toolkit";
import { ignoredActions, persistedReducer } from "./persist";
import { persistStore } from "redux-persist";

const store = configureStore( {
    reducer: persistedReducer,

    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware( {
            serializableCheck: { ignoredActions },
        } ),

} );

export default store;
export const persiStore = persistStore( store );
