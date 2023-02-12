import React, { useState } from "react"
import sidebarCss from "./Sidebar.module.css"
import loanCalcCss from "../../../../scenes/Openscenes/LoanCalculator/LoanCalculator.module.css"
import avatar from "../../../../shots/coineye.jpg"
import { Link } from "react-router-dom"
import { HomeRounded, AppRegistrationRounded, LogoutRounded } from '@mui/icons-material';
import Modal from "../../../UI/Modal/Modal";
import Apply from "../../../../scenes/Adminscenes/Apply/Apply";

const Sidebar = () => {

    const [calcValues, setCalcValues] = useState({
        loading: false,
        modalOpen: false,
        error: false,
        errorMsg: ""
    })

    const handleLoanApply = () => {
        setCalcValues({...calcValues, modalOpen: true})
    }

    const handleModalClose = () => {
        setCalcValues({ modalOpen: false});
    }


    return (
        <div className={sidebarCss.Sidebar} >
            <Link to={"/"} className={sidebarCss.Link} style={{marginBottom: "3rem"}} >
                <div className={sidebarCss.Item}>
                    <img className={sidebarCss.Avatar} src={avatar} alt={avatar} />
                    <div className={sidebarCss.NameText}>Anderson Palomalogolis</div>
                </div>
            </Link>

            <Link to={"/"} className={sidebarCss.Link} >
                <div className={sidebarCss.Item}>
                    <HomeRounded className={sidebarCss.Icon} fontSize="medium" />
                    <div className={sidebarCss.Text}>Dashboard</div>
                </div>
            </Link>

            {/* <Link to={"/"} className={sidebarCss.Link}> */}
                <div className={sidebarCss.Item} onClick={handleLoanApply}>
                    <AppRegistrationRounded className={sidebarCss.Icon} fontSize="medium" />
                    <div className={sidebarCss.Text}>Apply for Loan</div>
                </div>
            {/* </Link> */}

            <Link to={"/"} className={sidebarCss.Link} >
                <div className={sidebarCss.Item}>
                    <LogoutRounded className={sidebarCss.Icon} fontSize="medium" />
                    <div className={sidebarCss.Text}>Logout</div>
                </div>
            </Link>


            
            <Modal modalOpen={calcValues.modalOpen} loading={calcValues.loading}>
                <div title='Close' className={loanCalcCss.CloseIcon} onClick={handleModalClose}>
                        X
                </div>
                <Apply />
            </Modal>
        </div>
    )
}

export default Sidebar;