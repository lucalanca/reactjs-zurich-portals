import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import v4 from "uuid/v4";
import * as ModalStyle from "./Modal.styles";

const modalRoot = document.getElementById("modalRoot");

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
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  componentDidUpdate(previousProps) {
    if (!previousProps.isOpened && this.props.isOpened) {
      this.closeButton.focus();
    }
  }

  render() {
    const { isOpened, title, children } = this.props;

    const JsxImplementation = (
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
      </ModalStyle.ModalContainer>
    );

    return ReactDOM.createPortal(JsxImplementation, this.el);
  }
}
