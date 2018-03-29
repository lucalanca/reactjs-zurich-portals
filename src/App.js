import React, { Component, Fragment } from "react";

import Button from "./Button";
import RegisterForm from "./RegisterForm";
import Modal from "./Modal";

import DrawerLayout from "./DrawerLayout";
import Sidebar from "./Sidebar";

// https://drafts.csswg.org/css-transforms-1/#transform-rendering
// https://github.com/w3c/csswg-drafts/issues/913
// https://philipwalton.com/articles/what-no-one-told-you-about-z-index/

// import Modal from "./ModalFromTheOtherSide";

import withPortal from "./withPortal";
const PortalizedModal = withPortal(Modal);

class App extends Component {
  state = {
    isOpened: false
    // isOpened2: false
  };

  render() {
    const {
      isOpened
      /*, isOpened2*/
    } = this.state;

    return (
      <Fragment>
        <DrawerLayout renderDrawer={() => <Sidebar />}>
          <main>
            <Button
              onClick={() =>
                this.setState(({ isOpened }) => ({ isOpened: !isOpened }))
              }
              innerRef={x => {
                this.openButton = x;
              }}
            >
              Open Modal
            </Button>
            <PortalizedModal
              isOpened={isOpened}
              triggerEl={this.openButton}
              onClose={() => this.setState({ isOpened: false })}
              title="Registration Form"
            >
              <RegisterForm />
            </PortalizedModal>

            {/* <Button
              onClick={() =>
                this.setState(({ isOpened2 }) => ({ isOpened2: !isOpened2 }))
              }
              innerRef={x => {
                this.openButton2 = x;
              }}
              style={{ marginTop: "10px" }}
            >
              Open Another Modal
            </Button>
            <Modal
              isOpened={isOpened2}
              triggerEl={this.openButton2}
              onClose={() => this.setState({ isOpened2: false })}
              title="Foo"
            >
              <p>What up?</p>
            </Modal> */}
          </main>
        </DrawerLayout>
      </Fragment>
    );
  }
}

export default App;
