import React from "react";
import { increment, decrement } from "./action";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <div>
      <img src="https://cdn-icons-png.flaticon.com/128/6134/6134718.png" alt="counter-img" />
      <h1>{props.count}</h1>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
