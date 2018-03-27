import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MdMenu from "react-icons/lib/md/menu";
import MdClose from "react-icons/lib/md/close";

const DRAWER_WIDTH = `80px`;

const Drawer = styled.div`
  width: ${DRAWER_WIDTH};
  background: #1a202c;
  color: #fff;
  flex-shrink: 0;
`;

const Content = styled.div`
  transition: margin-right 200ms ease-out;
`;

const Close = styled.button`
  position: absolute;
  z-index: 2;
  top: 1rem;
  right: 1rem;

  width: 3rem;
  height: 3rem;
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 0;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 200ms;
  color: rgba(0, 0, 0, 1);
  &:hover {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: calc(100% + ${DRAWER_WIDTH});
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;

  transform: ${({ isOpened }) =>
    isOpened ? `none` : `translateX(-${DRAWER_WIDTH})`};
  transition: transform 200ms ease-out, padding-right 200ms ease-out;
  padding-right: ${({ isOpened }) => (isOpened ? `${DRAWER_WIDTH}` : `0`)};

  > ${Drawer} {
  }

  > ${Content} {
    flex-grow: 1;
  }

  ${Close} {
    transform: ${({ isOpened }) =>
      isOpened ? `translateX(-${DRAWER_WIDTH})` : `none`};
    transition: transform 200ms ease-out;
  }
`;

const OpenIcon = styled(MdMenu)`
  width: 100%;
  height: auto;
  color: inherit;
  fill: currentColor;
`;

const CloseIcon = OpenIcon.withComponent(MdClose);

class DrawerLayout extends Component {
  state = {
    isOpened: false
  };

  static propTypes = {
    renderDrawer: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer = () =>
    this.setState(({ isOpened }) => ({ isOpened: !isOpened }));

  render() {
    const { isOpened } = this.state;
    const { renderDrawer, children } = this.props;
    return (
      <Container isOpened={isOpened}>
        <Close
          type="button"
          title={isOpened ? "Close Menu" : "Open Menu"}
          onClick={this.toggleDrawer}
        >
          {isOpened ? <CloseIcon /> : <OpenIcon />}
        </Close>
        <Drawer>{renderDrawer({ isOpened })}</Drawer>
        <Content>{children}</Content>
      </Container>
    );
  }
}

export default DrawerLayout;
