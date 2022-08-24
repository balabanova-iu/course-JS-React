import React from "react";

import styled from "styled-components";

const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 400;
  height: 100px;
  background-color: blanchedalmond;
  margin: 0;
`;

const AppHeader = () => {
  return <Header>TodoApp</Header>;
};

export default AppHeader;
