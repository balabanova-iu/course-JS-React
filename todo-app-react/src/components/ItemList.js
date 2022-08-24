import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: bisque;
  padding: 25px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const Title = styled.div`
  border-bottom: 2px solid black;
  flex: 1;
  margin-right: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: red;
`;

const ItemList = ({ data, onDelete, onOpenModal }) => {
  return (
    <Wrapper>
      {data.map(({ id, title }) => {
        return (
          <Item key={id}>
            <Title onClick={() => onOpenModal(id)}>
              <span>{id}</span>
              <span>{title}</span>
            </Title>
            <Button onClick={() => onDelete(id)}>X</Button>
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default ItemList;
