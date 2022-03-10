//react imports
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom"

const useModal = (idName) => {
    //state
    const [isModalShowing, setIsModalShowing] = useState(false);

    //ref
    const modalRef = useRef(null);

    useEffect(() => {
        isModalShowing ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll";

        return () => {
            document.body.removeAttribute("style")
        }

    }, [isModalShowing, modalRef])

    //toggle modal function
    const toggleModal = () => setIsModalShowing(prevState => !prevState);

    //modal wrapper component
    const Modal = ({ isModalShowing, children }) => {
        return isModalShowing ? ReactDOM.createPortal(<div ref={modalRef}>{children}</div>, document.getElementById(`${idName}`)) : null;
    }

    return { isModalShowing, toggleModal, Modal }

}
export default useModal;