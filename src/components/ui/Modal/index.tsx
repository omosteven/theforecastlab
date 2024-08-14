
import * as Dialog from "@radix-ui/react-dialog";

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
    <Dialog.Root open={isOpen} onOpenChange={() => onClose?.()}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed inset-0 bg-black bg-opacity-50 z-[10000]" />
        <Dialog.Content
          className={`DialogContent fixed no-border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  rounded-md shadow-lg w-full max-w-md min-h-[200px] md:w-1/2 md:max-w-none max-h-[90vh] overflow-y-auto z-[10000]  dialogContent`}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CustomModal;
