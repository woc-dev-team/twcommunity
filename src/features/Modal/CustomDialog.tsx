import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

interface CustomDialogProps {
    open: boolean;
    handleOpen: () => void;
    title?: string;
    children: React.ReactNode;
}
 
const CustomDialog = ({open, handleOpen, title, children}: CustomDialogProps) => {    
    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>{title}</DialogHeader>
                <DialogBody>{children}</DialogBody>
                <DialogFooter>
                    <button variant="text" color="black" onClick={handleOpen} className="mr-1">
                        <span>닫기</span>
                    </button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default CustomDialog;