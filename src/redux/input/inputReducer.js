import { DELETE_VALUE, EDIT_VALUE1, INPUT_ADD } from "./inputType";
import { EDIT_VALUE } from "./inputType";

const initialState = {
  formValue: [],
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_ADD:
      return {
        ...state,
        formValue: [...state?.formValue, action?.payload],
      };
    case EDIT_VALUE:
      return {
        ...state,
        formValue: [...action?.payload],
      };

    case DELETE_VALUE:
      return {
        ...state,
        formValue: [...action?.payload],
      };
    default:
      return state;
  }
};
