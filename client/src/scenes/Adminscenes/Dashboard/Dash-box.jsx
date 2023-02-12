import React from "react"
import dashboardCss from "./Dashboard.module.css"

const DashBox = (props) => {


    return (

        <div className={dashboardCss.Box}>

            <h5>{props.title}</h5>
            <hr />
            <div>${props.value}</div>

        </div>
    )
}

export default DashBox;