import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWindow = styled.div`
  width: 400px;
  height: 200px;
`;

const ModalContent = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  padding: 40px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  max-height: 80vh;
  overflow-y: auto;
  box-sizing: border-box;
  line-height: 30px;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 8px;
  right: 14px;
  font-size: 30px;
  color: #000;
  opacity: 0.5;
  font-weight: 700;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Modal = ({
  title,
  description,
  onCloseModal,
  onChangeTitleModal,
  onChangeDescriptionModal,
}) => {
  return (
    <Wrapper>
      <ModalWindow>
        <ModalContent>
          <ModalClose onClick={onCloseModal}>×</ModalClose>
          <div>
            <span>Titel:</span>
            <input value={title} onChange={onChangeTitleModal} />
          </div>
          <div>
            <span>Description:</span>
            <textarea value={description} onChange={onChangeDescriptionModal} />
          </div>
        </ModalContent>
      </ModalWindow>
    </Wrapper>
  );
};

export default Modal;
