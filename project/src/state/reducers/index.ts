import { searcherActions, searcherReducer, } from "./userSearcher";
import { axiosReducer } from "./fetch";
import {cartsReducer, cartsActions} from "./carts";

const actions = { ...searcherActions, ...cartsActions };
const reducers = { searcherReducer, axiosReducer, cartsReducer };

export { actions, reducers };
