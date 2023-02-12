import React from "react"
import dashboardCss from "./Dashboard.module.css"
import { Grid } from "@mui/material"
import Sidebar from "../../../components/global/Admin/Sidebar/Sidebar";
import DashBox from "./Dash-box.jsx"
import Footer from "../../../components/global/Admin/Footer/Footer";

const Dashboard = () => {


    return (
        <div className={dashboardCss.Dashboard}>
            <Sidebar apply/>

            <Grid container>
                <Grid item xs={12} md={6} lg={4}>
                    <DashBox title="Current Loan" value="0" />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <DashBox title="Current Loan" value="0" />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <DashBox title="Current Loan" value="0" />
                </Grid>
            </Grid>


            <Footer />
        </div>
    )

}

export default Dashboard;