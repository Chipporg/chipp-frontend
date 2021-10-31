import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "../BackDrop/BackDrop";
import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className="modal__main-container" onClick={props.onCancel}>
      <div
        className={`modal ${props.className}`}
        style={props.style}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`modal__header ${props.headerClass}`}>
          <div>{props.header}</div>
        </div>
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        {props.footer && <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>}
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
