//react imports
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom"

// ! Removing due to iOS issue.
//body scroll lock
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


const useModal = (idName) => {
    //state
    const [isModalShowing, setIsModalShowing] = useState(false)
    //ref
    const modalRef = useRef(null);

    useEffect(() => {
        // ! removing Body-scroll-lock due to iOS issue.
        // const options = { reserveScrollBarGap: true };
        // isModalShowing ? disableBodyScroll(modalRef, options) : enableBodyScroll(modalRef);
        isModalShowing ? document.body.style.overflow = "hidden": document.body.style.overflow="scroll";
    }, [isModalShowing, modalRef])

    //toggle modal function
    const toggleModal = () => setIsModalShowing(prevState => !prevState);

    //modal wrapper component
    const Modal = ({ isModalShowing, children }) => isModalShowing ? ReactDOM.createPortal(<div ref={modalRef}>{children}</div>, document.getElementById(`${idName}`)) : null;

    return { isModalShowing, toggleModal, Modal }

}
export default useModal