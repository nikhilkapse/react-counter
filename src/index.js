import React from "react";
import { render } from "react-dom";

const btn = {
  fontSize: "16px",
  padding: "8px 16px"
};
const countStyle = {
  fontSize: "48px",
  padding: "0 16px",
  verticalAlign: "middle"
};
const AddBtn = props => {
  return (
    <button style={props.style} onClick={props.onClick}>
      +
    </button>
  );
};
const MinusBtn = props => {
  return (
    <button style={props.style} onClick={props.onClick}>
      -
    </button>
  );
};
const ResetBtn = props => {
  return (
    <button style={props.style} onClick={props.onClick}>
      reset
    </button>
  );
};
const ShowCount = props => {
  return <span style={props.style}>{props.count}</span>;
};

class Counter extends React.Component {
  state = {
    count: 0
  };
  handleIncreaseCount = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  handleDecreaseCount = () => {
    if (this.state.count === 0) {
      return;
    }
    this.setState(({ count }) => ({ count: count - 1 }));
  };
  handleResetCount = () => {
    this.setState(({ count }) => ({ count: 0 }));
  };
  render() {
    return (
      <div className="container">
        <div>
          <AddBtn style={btn} onClick={this.handleIncreaseCount} />
          <ShowCount style={countStyle} count={this.state.count} />
          <MinusBtn style={btn} onClick={this.handleDecreaseCount} />
        </div>
        <div>
          <ResetBtn style={btn} onClick={this.handleResetCount} />
        </div>
      </div>
    );
  }
}

render(<Counter />, document.getElementById("root"));
