//react imports
import { useState } from "react";
import ReactDOM from "react-dom"

const useModal = (idName) => {
    //modal state
    const [isModalShowing, setIsModalShowing] = useState(false)

    //toggle modal function
    const toggleModal = () => setIsModalShowing(prevState => !prevState)

    //modal wrapper component
    const Modal = ({ isModalShowing, children }) => isModalShowing ? ReactDOM.createPortal(<>{children}</>, document.getElementById(`${idName}`)) : null;

    return { isModalShowing, toggleModal, Modal }

}

export default useModal