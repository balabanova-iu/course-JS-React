import React, { Component } from "react";

import "./style.css";

import Input from "../Input";
import Button from "../Buttons";
import Resultss from "../Results";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      command: "",
      results: [],
    };
  }

  clickButton = (text) => {
    if (text === "C") {
      this.setState({
        command: "",
      });
    } else if (text === "=") {
      const result = eval(this.state.command);
      const newItem = `${this.state.command} = ${result}`;
      const newArr = [...this.state.results, newItem];

      this.setState({
        command: result,
        results: newArr,
      });
    } else {
      this.setState({
        command: this.state.command + text,
      });
    }
  };

  changeInput =(e) => {
    this.setState({
      command: e.target.value,
    });
  }

  render() {
    return (
      <>
        <div className="app">
          <Input value={this.state.command} onChange={this.changeInput} />
          <div className="lines_1">
            <Button text="+" color="gray" onClick={this.clickButton} />
            <Button text="-" color="gray" onClick={this.clickButton} />
            <Button text="*" color="gray" onClick={this.clickButton} />
            <Button text="/" color="gray" onClick={this.clickButton} />
          </div>
          <div className="lines_2">
            <div className="lines_2_1">
              <Button text="7" onClick={this.clickButton} />
              <Button text="4" onClick={this.clickButton} />
              <Button text="1" onClick={this.clickButton} />
              <Button text="0" onClick={this.clickButton} />
            </div>
            <div className="lines_2_1">
              <Button text="8" onClick={this.clickButton} />
              <Button text="5" onClick={this.clickButton} />
              <Button text="2" onClick={this.clickButton} />
              <Button text="." onClick={this.clickButton} />
            </div>
            <div className="lines_2_1">
              <Button text="9" onClick={this.clickButton} />
              <Button text="6" onClick={this.clickButton} />
              <Button text="3" onClick={this.clickButton} />
              <Button text="C" onClick={this.clickButton} />
            </div>
            <div className="lines_2_1">
              <Button text="=" color="blue" onClick={this.clickButton} />
            </div>
          </div>
        </div>
        <Resultss results={this.state.results} />
      </>
    );
  }
}

export default App;
