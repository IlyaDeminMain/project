import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {DataFetch} from "../api/type";

export interface InitialState {
  carts: DataFetch[];
  activeCartId: number | null;
}
const initialState: InitialState = {
    carts: [],
    activeCartId: null,
};
const name = "names";
const slice = createSlice( {
    name,
    initialState,
    reducers: {
        addCart( state, {payload}: PayloadAction<DataFetch> ) {
            if ( payload ) {
                state.carts.push( payload );
            } else {
                return state;   
            }
        },
        activeCartUser( state, {payload}: PayloadAction<number> ) {
            state.activeCartId = payload;
        },
        removeCart( state, {payload}: PayloadAction<number> ) {
            state.carts = state.carts.filter( ( item, i )=>{
                if ( i !== payload ) {
                    return item;
                }
            } );
        }
    },
} );

export const cartsActions = slice.actions;
export const cartsReducer = slice.reducer;

