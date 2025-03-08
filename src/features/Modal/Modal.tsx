import { ModalProps } from "../../entities/interface";
 
const Modal = ({title, open, handler, children, close}: ModalProps) => {    
    return (
        <>
            {open && <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 z-40" onClick={handler}></div>}
            {open &&
                <div className="w-4/5 h-4/5 grid grid-rows-6 fixed inset-0 bg-white dark:bg-gray-900 z-50 rounded-2xl place-self-center" onClick={(e) => e.stopPropagation()}>
                    <div className="h-full w-full row-span-1 -mb-5 text-blue-900 dark:text-blue-50 text-xl c_md:text-3xl font-thin text-center mt-9">{title}</div>
                    <div className="h-full w-full row-span-4">{children}</div>
                    <footer className="h-full w-full row-span-1 text-center">
                        <button onClick={handler} className="text-md c_md:text-xl text-black dark:text-white font-semibold mt-9 transition-all duration-500 ease-in-out hover:scale-110 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950">
                            {close}
                        </button>
                    </footer>
                </div>
            }
        </>
    );
}

export default Modal;