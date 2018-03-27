import React, { Component, Fragment } from "react";

import Button from "./Button";
import RegisterForm from "./RegisterForm";
import DrawerLayout from "./DrawerLayout";
import Sidebar from "./Sidebar";
// import Modal from "./Modal";
import Modal from "./ModalFromTheOtherSide";

// WATCH IT FAIL ON CHROME/FIREFOX (BUT WRONGLY SUCCEED ON IE11).
class App extends Component {
  state = {
    isOpened: false,
    isOpened2: false
  };

  render() {
    const { isOpened, isOpened2 } = this.state;

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
            <Modal
              isOpened={isOpened}
              triggerEl={this.openButton}
              onClose={() => this.setState({ isOpened: false })}
              title="Registration Form"
            >
              <RegisterForm />
            </Modal>

            <Button
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
            </Modal>
          </main>
        </DrawerLayout>
      </Fragment>
    );
  }
}

export default App;
