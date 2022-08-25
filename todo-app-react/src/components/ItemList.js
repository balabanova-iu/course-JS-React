import React from "react";

import styled from "styled-components";

import CloseButton from "react-bootstrap/CloseButton";
import ListGroup from "react-bootstrap/ListGroup";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: bisque;
  padding: 25px;
`;

const Listik = styled.div`
  flex: 1;
`;

const ItemList = ({ data, onDelete, onOpenModal }) => {
  return (
    <Wrapper>
      <ListGroup as="ol" numbered>
        {data.map(({ id, title }) => {
          return (
            <ListGroup.Item
              className="d-flex justify-content-between align-items-start"
              as="li"
              key={id}
              onClick={() => onOpenModal(id)}
            >
              <Listik>{title}</Listik>
              <CloseButton
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDelete(id);
                }}
              />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Wrapper>
  );
};

export default ItemList;
