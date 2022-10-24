
import { createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";

// this for the redux extension (you can ignore it)
import { composeWithDevTools } from "@redux-devtools/extension";




//1- Create store
export const store = createStore(rootReducer, composeWithDevTools());