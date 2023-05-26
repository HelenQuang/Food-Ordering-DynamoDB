import styles from "../../UI/Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onHideCart }) => {
  return <div className={styles.backdrop} onClick={onHideCart}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onHideCart }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
