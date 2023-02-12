import React from "react";
import { Link } from "react-router-dom";
import buttonsCss from "./Buttons.module.css"
import { Box } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export const ButtonGreen = (props) => {
    return (
        <Link to={"/" + props.link} className={buttonsCss.ButtonGreen}>
                {props.title}
        </Link>
    )
}

export const ButtonWhite = (props) => {
    return (
        <Link to={"/" + props.link} className={buttonsCss.ButtonWhite}>
                {props.title}
        </Link>
    )
}

export const ButtonLineType = (props) => {
    return (
        <Link to={"/" + props.link} className={buttonsCss.ButtonLineType}>
            <Box>
                {props.title} 
                <ArrowRightIcon className={buttonsCss.LineIcon} />
            </Box>
        </Link>
    )
}

export const BtnSubmit = (props) => {
    return(
        <button style={{width: props.width}} type="submit" onClick={props.submit} className={buttonsCss.BtnSubmit}>{props.children}</button>
    )
}

// export default ButtonAccent;