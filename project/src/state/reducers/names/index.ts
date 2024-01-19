import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export type Names = string[] | undefined;

interface InitialState {
  names: string[] | [];
}
const initialState: InitialState = {
    names: [],
};
const name = "names";
const namesSlice = createSlice( {
    name,
    initialState,
    reducers: {
        addNames( state, {payload}: PayloadAction<Names> ) {
            if ( payload ) {
                state.names = payload;
            } else {
                state.names = [];
            }
        },
    },
} );

export const namesActions = namesSlice.actions;
export const namesReducer = namesSlice.reducer;
