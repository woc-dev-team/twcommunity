import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

interface ModalProps {
    className: string;
    open: boolean;
    handleOpen: () => void;
    children: React.ReactNode;
}
 
const Modal = ({className, open, handleOpen, children}: ModalProps) => {    
    return (
        <>
            <Dialog
                className={className}
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogBody>{children}</DialogBody>
                <DialogFooter>
                    <Button variant="text" color="black" onClick={handleOpen} className="mr-1">
                        <span>닫기</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default Modal;