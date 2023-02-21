import Auth from "components/auth";
import { createPortal } from "react-dom";
import { useRecoilState } from "recoil";
import { modalState } from "store/modal";

const modalRoot = document.getElementById("modal")! as HTMLDivElement;

const Modal = () => {
    const [{isOpen, type}, setIsOpen] = useRecoilState(modalState);

    if(!isOpen || !modalRoot){
        document.body.classList.remove("modal_open");
        return null;
    };

    document.body.classList.add("modal_open");
    
    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsOpen(prev => ({...prev, isOpen: !prev.isOpen}));
    };

    return createPortal(
        <div 
            className="w-full h-full fixed top-0 left-0 z-[1000] bg-Black/[0.5] flex items-center justify-center"
            onClick={onClickHandler}    
        >
            <div 
                className="w-[50rem] rounded-[12px] bg-White p-[5rem]"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                <Auth type={type as "login" | "registration"} setIsOpen={setIsOpen}/>
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;