import { combineReducers } from "redux";
import CartReducer from './cartReducer'


let combinedReducer = combineReducers({
  cartReducer:CartReducer
})

const rootReducer = (state,action) => {
  return combinedReducer(state,action)
}

export default rootReducer