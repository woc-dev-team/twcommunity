import React from "react";

interface ModalProps {
    title: string;
    open: boolean;
    handler: () => void;
    children: React.ReactNode;
}
 
const Modal = ({title, open, handler, children}: ModalProps) => {    
    return (
        <>
            {open && <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 z-40" onClick={handler}></div>}
            {open &&
                <div className="w-4/5 h-4/5 grid grid-rows-6 fixed inset-0 bg-white dark:bg-gray-900 z-50 rounded-2xl place-self-center" onClick={(e) => e.stopPropagation()}>
                    <div className="h-full w-full row-span-1 -mb-5 text-blue-900 dark:text-blue-50 text-xl c_md:text-3xl font-thin text-center mt-9">{title}</div>
                    <div className="h-full w-full row-span-4">{children}</div>
                    <footer className="h-full w-full row-span-1">
                        <button onClick={handler} className="w-full h-full text-md c_md:text-xl text-black dark:text-white font-semibold">
                            닫기
                        </button>
                    </footer>
                </div>
            }
        </>
    );
}

export default Modal;