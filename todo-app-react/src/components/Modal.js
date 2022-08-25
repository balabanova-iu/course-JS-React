import React from "react";

import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

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
  width: 600px;
  height: 400px;
`;

const ModalContent = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  padding: 40px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  max-height: 80vh;
  overflow-y: auto;
  box-sizing: border-box;
  line-height: 30px;
`;

const Modall = ({
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
          <Modal.Dialog>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Title:</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={onChangeTitleModal}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Description:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={description}
                    onChange={onChangeDescriptionModal}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={onCloseModal}>
                Close
              </Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </ModalContent>
      </ModalWindow>
    </Wrapper>
  );
};

export default Modall;
