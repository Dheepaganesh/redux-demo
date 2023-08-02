import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
  no_of_ice: 15,
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        no_of_ice: state?.no_of_ice + 5,
      };
    default:
      return state;
  }
};
