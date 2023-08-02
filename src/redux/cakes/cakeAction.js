import { BUY_CAKE, BUY_ICE, ADD_CAKE } from "./cakeType";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const buyIce = () => {
  return {
    type: BUY_ICE,
  };
};

export const addCake = () => {
  return {
    type: ADD_CAKE,
  };
};
