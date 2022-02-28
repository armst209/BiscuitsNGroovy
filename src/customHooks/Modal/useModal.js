//react imports
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom"

//body scroll lock
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


const useModal = (idName) => {
    //state
    const [isModalShowing, setIsModalShowing] = useState(false)
    //ref
    const modalRef = useRef(null);

    useEffect(() => {
        const options = { reserveScrollBarGap: true };
        isModalShowing ? disableBodyScroll(modalRef, options) : enableBodyScroll(modalRef);
    }, [isModalShowing, modalRef])

    //toggle modal function
    const toggleModal = () => setIsModalShowing(prevState => !prevState);

    //modal wrapper component
    const Modal = ({ isModalShowing, children }) => isModalShowing ? ReactDOM.createPortal(<div ref={modalRef}>{children}</div>, document.getElementById(`${idName}`)) : null;

    return { isModalShowing, toggleModal, Modal }

}
export default useModal