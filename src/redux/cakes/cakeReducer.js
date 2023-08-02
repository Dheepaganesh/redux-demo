import { BUY_CAKE } from "./cakeType";
import { BUY_ICE } from "./cakeType";
import { ADD_CAKE } from "./cakeType";

const initialState = {
  no_of_cakes: 10,
  ice: "available",
};

export const cakeReducer = (state = initialState, action) => {
  console.log("data--1", state, action);
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        no_of_cakes: state?.no_of_cakes - 1,
      };
    case ADD_CAKE: {
      return {
        ...state,
        no_of_cakes: state?.no_of_cakes + 1,
      };
    }
    case BUY_ICE: {
      console.log("Working");
      return {
        ...state,
        ice: "not available",
      };
    }
    default:
      return state;
  }
};
