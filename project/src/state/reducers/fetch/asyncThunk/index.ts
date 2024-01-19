import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {DataFetch} from "../type";

enum TypePrefix {
  USER = "user/fetchUsers",
}

const fetchUsers = createAsyncThunk( TypePrefix.USER, async ( num: number ) => {
    const response = await axios.get<DataFetch[]>(
        "https://fakestoreapi.com/users",
        {
            params: {
                limit: num,
            },
        }
    );
    return response.data;
} );
export default fetchUsers;
