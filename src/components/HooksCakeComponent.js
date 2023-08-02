import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, buyIce } from "../redux/cakes/cakeAction";

function HookCakeContainer() {
  const numberOfCakes = useSelector((state) => state?.cake?.no_of_cakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes(Hooks) - {numberOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

export default HookCakeContainer;
