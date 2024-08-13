import { Modal } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

import "./Modal.scss";
import { ModalProps } from "./modal.d";

const CustomModal = (props: ModalProps) => {
  const {
    children,
    isOpen,
    onClose,
    hideButton = false,
    onButtonClick,
    buttonText,
  } = props;

  return (
    <Modal
      style={{
        position: "fixed",
        zIndex: 10000,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // minWidth:'50%'
        width:'fit-content'
      }}
      show={isOpen}
      onHide={() => onClose()}
    >
      <Modal.Body>
        <div className="default-modal">
          <div className="icon" onClick={() => onClose()}>
            {/* <Icon icon="close" /> */}x
          </div>
          {children}
          {!hideButton && (
            <div onClick={() => onButtonClick?.()}>
              {/* <Button
                className="close--button"
                text={buttonText ? buttonText : "Okay"}
              /> */}
              <button className="close--button">
                {buttonText ? buttonText : "Okay"}
              </button>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
