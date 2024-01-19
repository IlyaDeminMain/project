import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {DataFetch} from "../fetch/type";

interface InitialState {
  carts: DataFetch[];
  activeCart: number | null
}
const initialState: InitialState = {
    carts: [],
    activeCart: null
};
const name = "names";
const cartsSlice = createSlice( {
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
            state.activeCart = payload;
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

export const cartsActions = cartsSlice.actions;
export const cartsReducer = cartsSlice.reducer;

