import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import v4 from "uuid/v4";
import styled from "styled-components";
import MdClose from "react-icons/lib/md/close";

import "./Base";
import Button from "./Button";
import RegisterForm from "./RegisterForm";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
`;

const ModalCard = styled.div`
  background: rgb(255, 255, 255);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;

  padding: 1rem 2rem;
`;

const ModalBody = styled.div`
  padding: 2rem 2rem 1rem;
`;

const ModalClose = styled.button`
  width: 1.2rem;
  height: 1.2rem;

  margin-left: 3rem;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);

  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;

  color: rgba(0, 0, 0, 0.5);

  &:hover {
    color: rgba(0, 0, 0, 8);
  }
`;

const ModalIcon = styled(MdClose)`
  color: inherit;
  fill: currentColor;
  width: 100%;
  height: auto;
`;

const ModalTitle = styled.h1`
  font-size: 1.2rem;
  text-align: center;
`;

class Modal extends Component {
  static propTypes = {
    isOpened: PropTypes.bool,
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired
  };

  static defaultProps = {
    isOpened: false
  };

  constructor(props) {
    super(props);
    this.id = v4();
    this.onClose = this.onClose.bind(this);
  }

  onClose = evt => this.props.onClose(evt);

  render() {
    const { isOpened, title, children } = this.props;

    return (
      <ModalContainer
        id={this.id}
        isOpened={isOpened}
        aria-hidden={isOpened ? "false" : "true"}
        aria-labelledby={`${this.id}-title`}
        role="dialog"
      >
        <ModalCard role="document" isOpened={isOpened}>
          <ModalHeader>
            <ModalTitle id={`${this.id}-title`}>{title}</ModalTitle>
            <ModalClose
              id={`${this.id}-close`}
              title="Close dialog"
              onClick={this.onClose}
            >
              <ModalIcon />
            </ModalClose>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalCard>
      </ModalContainer>
    );
  }
}

class App extends Component {
  state = {
    isOpened: false
  };

  render() {
    const { isOpened } = this.state;
    return (
      <main>
        <Button
          onClick={() =>
            this.setState(({ isOpened }) => ({ isOpened: !isOpened }))
          }
        >
          Open Modal
        </Button>
        <Modal
          isOpened={isOpened}
          onClose={() => this.setState({ isOpened: false })}
          title="Registration Form"
        >
          <RegisterForm />
        </Modal>
      </main>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
