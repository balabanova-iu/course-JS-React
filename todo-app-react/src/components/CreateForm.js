import React, { Component } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: antiquewhite;
  padding: 25px;
`;

const Input = styled.input`
  margin-bottom: 25px;
  height: 30px;
  border: 2px solid black;
  outline: none !important;
  :hover {
    border: 2px solid blueviolet;
  }
  :focus {
    border: 2px solid blueviolet;
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 25px;
  border: 2px solid black;
  outline: none !important;
  :hover {
    border: 2px solid blueviolet;
  }
  :focus {
    border: 2px solid blueviolet;
  }
`;

const Button = styled.button`
  height: 30px;
  background-color: chartreuse;
`;

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onClick = (e) => {
    this.props.onAdd(this.state.title, this.state.description);
    this.setState({
      title: "",
      description: "",
    });
  };

  render() {
    const { title, description } = this.state;
    return (
      <Wrapper>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={this.onTitleChange}
        />
        <Textarea
          name="textarea"
          placeholder="Description"
          value={description}
          onChange={this.onDescriptionChange}
        ></Textarea>
        <Button type="button" onClick={this.onClick}>
          Add Task
        </Button>
      </Wrapper>
    );
  }
}

export default CreateForm;
