import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import v4 from "uuid/v4";
import * as ModalStyle from "./Modal.styles";

export default class Modal extends Component {
  static propTypes = {
    isOpened: PropTypes.bool,
    triggerEl: PropTypes.instanceOf(HTMLButtonElement),
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired
  };

  static defaultProps = {
    isOpened: false
  };

  closeButton = null;

  constructor(props) {
    super(props);
    this.id = v4();
    this.onClose = this.onClose.bind(this);

    // NEW STUFF
    this.el = document.createElement("div");
  }

  onClose = evt => {
    this.props.onClose(evt);
    this.props.triggerEl && this.props.triggerEl.focus();
  };

  // NEW STUFF
  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  componentDidUpdate(previousProps) {
    if (!previousProps.isOpened && this.props.isOpened) {
      this.closeButton.focus();
    }
  }

  render() {
    const { isOpened, title, children } = this.props;

    // const JsxImplementation = (

    // );

    return ReactDOM.createPortal(
      <ModalStyle.ModalContainer
        id={this.id}
        isOpened={isOpened}
        aria-hidden={isOpened ? "false" : "true"}
        aria-labelledby={`${this.id}-title`}
        role="dialog"
      >
        <ModalStyle.ModalCard role="document" isOpened={isOpened}>
          <ModalStyle.ModalHeader>
            <ModalStyle.ModalTitle id={`${this.id}-title`}>
              {title}
            </ModalStyle.ModalTitle>
            <ModalStyle.ModalClose
              id={`${this.id}-close`}
              title="Close dialog"
              onClick={this.onClose}
              innerRef={x => {
                this.closeButton = x;
              }}
            >
              <ModalStyle.ModalIcon />
            </ModalStyle.ModalClose>
          </ModalStyle.ModalHeader>
          <ModalStyle.ModalBody>{children}</ModalStyle.ModalBody>
        </ModalStyle.ModalCard>
      </ModalStyle.ModalContainer>,
      this.el
    );
  }
}
