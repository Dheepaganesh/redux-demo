import { combineReducers } from "redux";
import { cakeReducer } from "./cakes/cakeReducer";
import { iceCreamReducer } from "./icecream/icecreamReduce";
import { formReducer } from "./input/inputReducer";
import userReducer from "./user/userRedution";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
  input: formReducer,
  user: userReducer,
});
