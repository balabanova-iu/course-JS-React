import React, { Component } from "react";

import styled from "styled-components";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: antiquewhite;
  padding: 25px;
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
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={title}
              onChange={this.onTitleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Description"
              rows={3}
              value={description}
              onChange={this.onDescriptionChange}
            />
          </Form.Group>
        </Form>
        {/* <Input
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
        ></Textarea> */}
        <Button type="button" onClick={this.onClick} variant="info">
          Add Task
        </Button>
      </Wrapper>
    );
  }
}

export default CreateForm;
