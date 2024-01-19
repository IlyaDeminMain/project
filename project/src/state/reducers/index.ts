import { searcherActions, searcherReducer, } from "./userSearcher";
import { fetchReducer } from "./fetch";
import {cartsReducer, cartsActions} from "./carts";
import { namesReducer, namesActions } from "./names";

const actions = { ...searcherActions, ...namesActions, ...cartsActions };
const reducers = { searcherReducer, fetchReducer, namesReducer, cartsReducer };

export { actions, reducers };
