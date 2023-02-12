import React from "react";
import modalCss from "./Modal.module.css"
import ClockLoader from "react-spinners/ClockLoader";



const Modal = (props) => {
    const modalBlock = props.modalOpen ? 
        <div className={modalCss.BgContainer}>
            <div className={modalCss.InnerContainer}>
                {props.loading ? <ClockLoader speedMultiplier='3' color="white" size="70" /> : props.children}
            </div>
        </div> : ""
                        
    return (
        modalBlock
    )
}

export default Modal