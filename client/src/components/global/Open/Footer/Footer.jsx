import React from "react";
import footerCss from "./Footer.module.css"
import logoImg from "../../../../shots/Asset 15mp.png"
import { Grid } from "@mui/material"
import { Link } from "react-router-dom";

const Footer = () => {


    return (
        <div className={footerCss.Footer}>
            <Grid container>
                <Grid item xs={12} md={3}>
                    <img src={logoImg} alt={logoImg} className={footerCss.Logo} />
                </Grid>
                <Grid item xs={12} md={3} className={footerCss.Top} >
                    <div>Get financing of up to two million for your business and more.</div>
                </Grid>
                <Grid item xs={12} md={3} className={footerCss.Top} >
                
                </Grid>
                <Grid item xs={12} md={3}  className={footerCss.Chat} >
                    <Link to={'/contact'} style={{textDecoration: "none", color: "#010148"}}><span style={{color: "#3f9db7"}}>Questions?</span> Let's Chat.</Link>
                </Grid>
            </Grid>

            <div className={footerCss.LinksContainer}>
                <Grid container>
                    <Grid item xs={12} lg={3}>
                        <Link to={'/about'} className={footerCss.Links}>
                            About MP Capital
                        </Link>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Link to={'/categories'} className={footerCss.Links}>
                            Loan Options
                        </Link>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Link to={'/terms'} className={footerCss.Links}>
                            Terms and Conditions
                        </Link>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Link to={'/careers'} className={footerCss.Links}>
                            Careers
                        </Link>
                    </Grid>
                </Grid>

            </div>

            <div className={footerCss.Text}>
            Business growth usually calls for the injection of extra cash. Without it, you can find your business stagnating and your growth hampered because 
            of not having enough cash flow or because your capital position is weak. This often means that the business must find the necessary funds quickly 
            enough to ensure the smooth flow of business. Most businesses begin by looking for funds in traditional sources such as banks. Unfortunately, banks 
            tend to be very selective when it comes to the businesses that they will lend to.
            </div>

            <div className={footerCss.Text}>
            A personal loan is a way for an individual to receive up to $135,000 in funding. The length of the loan is called the term and can range all the way up to 360 days, depending on the 
            lender. Our simple online form does not contain any long questions. Instead, it asks for your basic information and a location for where you would 
            like the loan to be sent to. It is that easy!
            </div>

            <div className={footerCss.Text}>
            We take privacy seriously, so we use industry-standard encryption on our website so that third parties cannot intercept your data. You can also look at our privacy policy for more details on this.
            </div>


            <div className={footerCss.Bottom}>
               <strong>
                    Copyright &copy; 
                {new Date().getFullYear()} MP Capital Pte Ltd. All Rights Reserved. Co. Reg. No. 201735761N
                10 Anson Road, #10-11 International Plaza Singapore 079903
               </strong>
            </div>
        </div>
    )

}

export default Footer;