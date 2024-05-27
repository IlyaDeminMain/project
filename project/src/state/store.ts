
import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./persist";
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const store = configureStore( {
    reducer: persistedReducer,

    middleware: ( getDefaultMiddleware:any ) =>
        getDefaultMiddleware( {
            serializableCheck: {
                ignoredActions : [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ]
            },
        } ),
} );

export default store;
export const persiStore = persistStore( store );
