import { createStore } from "redux";

import reducer from "./Reducers/index";

export default function confugureStore(initState) {
  return createStore(reducer,initState)
}