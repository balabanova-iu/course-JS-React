import React, { Component } from "react";

import styled from "styled-components";

import AppHeader from "./Header";
import CreateForm from "./CreateForm";
import ItemList from "./ItemList";
import Modall from "./Modal";

import "bootstrap/dist/css/bootstrap.min.css";

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isModelOpen: false,
      itemId: null,
    };
    this.maxId = 1;
  }

  onAdd = (title, description) => {
    const newItem = {
      title,
      description,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  openModal = (id) => {
    this.setState({
      isModelOpen: true,
      itemId: id,
    });
  };

  closeModal = () => {
    this.setState({
      isModelOpen: false,
      itemId: null,
    });
  };

  changeTitleModal = (e) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === this.state.itemId) {
          return { ...item, title: e.target.value };
        }
        return item;
      }),
    }));
  };

  changeDescriptionModal = (e) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === this.state.itemId) {
          return { ...item, description: e.target.value };
        }
        return item;
      }),
    }));
  };

  render() {
    const item = this.state.data.find((item) => item.id == this.state.itemId);

    return (
      <>
        <div>
          <AppHeader />
          <Content>
            <CreateForm onAdd={this.onAdd} />
            <ItemList
              data={this.state.data}
              onDelete={this.deleteItem}
              onOpenModal={this.openModal}
            />
          </Content>
        </div>
        {this.state.isModelOpen ? (
          <Modall
            title={item.title}
            description={item.description}
            onCloseModal={this.closeModal}
            onChangeTitleModal={this.changeTitleModal}
            onChangeDescriptionModal={this.changeDescriptionModal}
          />
        ) : null}
      </>
    );
  }
}

export default App;
