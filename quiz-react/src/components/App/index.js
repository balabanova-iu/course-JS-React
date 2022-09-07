import React, { Component } from "react";

import Start from "../Start";
import Question from "../Question";
import End from "../End";

import quiz from "../../constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: -1,
      answers: {},
    };
  }

  nextClick = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
  };

  answerClick = (n) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [this.state.currentQuestion]:
          n === quiz[this.state.currentQuestion].rightAnswer ? true : false,
      },
    });
  };

  endClick = () => {
    this.setState({
      currentQuestion: -1,
    });
  };

  render() {
    if (this.state.currentQuestion === -1) {
      return <Start onstartClick={this.nextClick} />;
    }

    if (
      this.state.currentQuestion >= 0 &&
      this.state.currentQuestion < quiz.length
    ) {
      return (
        <Question
          onnextClick={this.nextClick}
          currentQuestion={this.state.currentQuestion}
          onAnswerClick={this.answerClick}
        />
      );
    }

    if (this.state.currentQuestion === quiz.length) {
      return <End answers={this.state.answers} onEndClick={this.endClick} />;
    }

    return null;
  }
}

export default App;
