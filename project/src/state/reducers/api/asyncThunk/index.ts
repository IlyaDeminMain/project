import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import type {DataFetch} from "../type";
import { URL, TypePrefix, Path } from "./const";

axios.defaults.baseURL = URL.FAKE_API;

const axiosThunk = createAsyncThunk( TypePrefix.USER, async ( num: number ) => {
    const {data} = await axios.get<DataFetch[]>(
        Path.USERS,
        {
            params: {
                limit: num,
            },
            timeout: 5000
        }
    );
    return data;
} );

export default axiosThunk;
