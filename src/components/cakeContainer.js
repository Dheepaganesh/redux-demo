import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeAction";
import { buyIce } from "../redux/cakes/cakeAction";
import { addCake } from "../redux/cakes/cakeAction";
function CakeContainer(props) {
  return (
    <div>
      <p>Cake Shop</p>
      <h2>Number of cakes {props.no_of_cakes}</h2>
      <button onClick={props.buyCake}>Buy Cake{props.buyCake}</button>
      <button onClick={props.addCake}>Add Cake</button>
      <p>Ice Availability:{props.ice}</p>
      <button onClick={props.buyIce}>Check Availability</button>
    </div>
  );
}

const mapProps = (state) => {
  return {
    no_of_cakes: state?.cake?.no_of_cakes,
    ice: state?.ice,
  };
};

const mapDispatch = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIce: () => dispatch(buyIce()),
    addCake: () => dispatch(addCake()),
  };
};

export default connect(mapProps, mapDispatch)(CakeContainer);
