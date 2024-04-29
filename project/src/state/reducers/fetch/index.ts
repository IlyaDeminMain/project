import { createSlice } from "@reduxjs/toolkit";
import axiosThunk from "./asyncThunk";
import type {DataFetch} from "./type";

interface InitialState {
  data: DataFetch[];
  loading: boolean;
  error: string | undefined;
}
const initialState: InitialState = {
    data: [],
    loading: false,
    error: undefined,
};
const name = "user";
const slice = createSlice( {
    name,
    initialState,
    reducers: {},
    extraReducers: ( builder ) =>
        builder
            .addCase( axiosThunk.pending, (state ) => {
                state.loading = true;
                state.data = [];
                state.error = undefined;
            } )
            .addCase( axiosThunk.fulfilled, (state, { payload } ) => {
                state.loading = false;
                state.data = payload;
                state.error = undefined;
            } )
            .addCase( axiosThunk.rejected, (state, { error } ) => {
                state.loading = false;
                state.data = [];
                state.error = error.message;
            } )
} );
export const axiosReducer = slice.reducer;
