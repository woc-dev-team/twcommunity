import { ModalProps } from "../../entities/interface";
 
const Modal = ({title, open, handler, children, close}: ModalProps) => {    
    return (
        <>
            {open && <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 z-40" onClick={handler}></div>}
            {open &&
                <div className="w-4/5 h-5/6 grid grid-rows-9 text-center fixed inset-0 bg-white dark:bg-gray-900 z-50 rounded-2xl place-self-center" onClick={(e) => e.stopPropagation()}>
                    <div className="row-span-1 text-blue-900 dark:text-blue-50 text-xl sm:text-2xl font-thin place-self-center">{title}</div>
                    <div className="h-full w-full row-span-7">{children}</div>
                    <button onClick={handler} className="h-10 text-md row-span-1 text-md sm:text-xl text-black dark:text-white font-semibold transition-all duration-500 ease-in-out hover:scale-110 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 place-self-center">
                        {close}
                    </button>
                </div>
            }
        </>
    );
}

export default Modal;