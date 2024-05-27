import store from "../store";
import { useDispatch, useSelector } from "react-redux";
import type {TypedUseSelectorHook} from "react-redux";
import { rootReducer } from "../persist";
import {  bindActionCreators } from "redux"
import { actions } from "../reducers";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const Dispatch: () => AppDispatch = useDispatch;
export const Selector: TypedUseSelectorHook<RootState> = useSelector;
export const actionsBind = bindActionCreators( actions, store.dispatch );
