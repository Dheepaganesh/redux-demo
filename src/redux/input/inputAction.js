import React from "react";
import { DELETE_VALUE, EDIT_VALUE, EDIT_VALUE1, INPUT_ADD } from "./inputType";

export const addInput = (inputvalue) => {
  return {
    type: INPUT_ADD,
    payload: inputvalue,
  };
};

export const deleteValue = (speceficElement) => {
  return {
    type: DELETE_VALUE,
    payload: speceficElement,
  };
};

export const editValue = (speceficElement) => {
  return {
    type: EDIT_VALUE,
    payload: speceficElement,
  };
};
