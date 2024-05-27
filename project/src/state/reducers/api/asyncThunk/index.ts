import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {DataFetch} from "../type";
import {URL, TypePrefix} from "./const";
import { rootReducer } from "../../../persist"


const axiosThunk = createAsyncThunk( TypePrefix.USER, async ( num: number ) => {
    const {data} = await axios.get<DataFetch[]>(
        URL.USERS,
        {
            params: {
                limit: num,
            },
            timeout: 5000
        }
    );
    return data;
} );

export type typeThunk =  ReturnType<typeof axiosThunk>
export default axiosThunk;
