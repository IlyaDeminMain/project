import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {DataFetch} from "../type";
import {URL} from "../type";

enum TypePrefix {
  USER = "user/fetchUsers",
}

const axiosThunk = createAsyncThunk( TypePrefix.USER, async (num: number ) => {
    const response = await axios.get<DataFetch[]>(
        URL.USERS,
        {
            method: 'get',
            params: {
                limit: num,
            },
        }
    );
    return response.data;
} );
export default axiosThunk;
