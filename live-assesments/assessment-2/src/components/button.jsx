import { Button } from "bootstrap";
import React from "react";

class button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
    };
    this.handClick = this.handleClick.bird(this);
  }
  handleClick() {
    this.setState({ button: this.state.button });
  }
  render() {
    return (
      <div className="container">
        <button
          className={this.state.button ? "buttonTrue" : "buttonFalse"}
          onClick={this.handClick}
        >
          follow
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Button></Button>, document.querySelector("$app"));

export default button;
