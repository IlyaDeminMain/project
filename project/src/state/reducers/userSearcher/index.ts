import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

interface SearcherSlice {
  userInputValue: string;
  autoComplete: boolean;
  warn: boolean;
  success: boolean
}

const initialState: SearcherSlice = {
    userInputValue: "",
    autoComplete: false,
    warn: false,
    success: false
};

const name = "searcher";

const searcherSlice = createSlice( {
    name,
    initialState,
    reducers: {
        changeVal( state, { payload }: PayloadAction<string> ) {
            state.userInputValue = payload;
        },
        autoComp( state, { payload }: PayloadAction<boolean> ) {
            state.autoComplete = payload;
        },
        warnForm( state, { payload }: PayloadAction<boolean> ) {
            state.warn = payload;
        },
        successForm( state, { payload }: PayloadAction<boolean> ) {
            state.success = payload;
        }
    }} );
export const searcherActions = searcherSlice.actions;
export const searcherReducer = searcherSlice.reducer;
