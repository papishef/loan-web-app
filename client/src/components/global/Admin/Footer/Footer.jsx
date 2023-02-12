import React from "react"
import footerCss from "./Footer.module.css"
import Translate from "../../../UI/Translate/Translate"



const Footer = () => {
    
    return (
        <div className={footerCss.Footer}>
            <div style={{marginLeft: "4rem"}}>
                Copyright &copy; 
                {new Date().getFullYear()} MP Capital Pte Ltd. 
            </div>

            <div>
                <Translate />
            </div>
        </div>
    )
}

export default Footer;