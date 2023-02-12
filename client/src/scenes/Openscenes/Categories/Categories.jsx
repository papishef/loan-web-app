import React from "react";
import MenuBar from "../../../components/global/Open/Menu/Menu";
import { ButtonGreen, ButtonLineType } from "../../../components/UI/Buttons/Buttons";
import aboutCss from "../About/About.module.css"
import landingCss from "../Landing/Landing.module.css"
import { Grid } from "@mui/material"
import agricImg from "../../../shots/agric.jpg"
import industryImg from "../../../shots/industry.jpg"
import lineCreditImg from "../../../shots/line-credit.jpg"
import smeImg from "../../../shots/sme.jpg"
import comRealEstImg from "../../../shots/com-real-estate.jpg"
import equipImg from "../../../shots/equipment.jpg"
import cnholidayImg from "../../../shots/cnholiday.jpg"
import educationImg from "../../../shots/education.jpg"
import homeKeyImg from "../../../shots/homekey.png"
import medicalImg from "../../../shots/medical.jpg"
import movingImg from "../../../shots/moving.jpg"
import emergencyImg from "../../../shots/emergency.jpg"
import LoanCalculator from "../LoanCalculator/LoanCalculator";
import Footer from "../../../components/global/Open/Footer/Footer";


const Categories = () => {
    return (
        <div>
            <MenuBar/>
            
            <div className={aboutCss.TopSection}>
                <div className={aboutCss.TopContent}>
                    <h1 style={{color: "white", fontSize: "2rem", marginBottom: "2.5rem" }}>Loan Categories</h1>
                    <ButtonGreen link='contact' title="Arrange a Callback" />
                </div>
            </div>


            
            <div className={landingCss.LightGrid} id="business-loans">
                <h3>Businesses We Finance</h3>
                <Grid container >
                        
                    <Grid container xs={12} md={5} sx={{textAlign: "center"}}>

                        <Grid item xs={5} mb={1} >
                            <div  style={{width: "100%", height: "16rem", margin: "auto"}} >
                                <img src={industryImg} alt={industryImg} style={{width: "100%", height: "16rem"}} />
                                <h5>Industry</h5>
                            </div>
                        </Grid>
                        <Grid item xs={7}>
                            <Grid item xs={12} mb={2}>
                                <div  style={{width: "90%", height: "6rem", margin: "auto"}} >
                                    <img src={agricImg} alt={agricImg} style={{width: "100%", height: "6rem"}} />
                                    <h5>Agro-Allied</h5>
                                </div>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <div  style={{width: "90%", height: "9rem", margin: "auto"}} >
                                    <img src={smeImg} alt={smeImg} style={{width: "100%", height: "9rem"}} />
                                    <h5>Small Business Administration (SBA)</h5>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid item xs={6} mt={1}>
                            <Grid item xs={12}>
                                <div style={{width: "100%", height: "8rem"}} >
                                    <img src={comRealEstImg} alt={comRealEstImg} style={{width: "100%", height: "8rem"}} />
                                    <h5>Commercial Real Estate</h5>
                                </div>
                            </Grid>
                            
                            <Grid item xs={12} mt={2}>
                                <div  style={{width: "100%", height: "6rem", margin: "auto"}} >
                                    <img src={lineCreditImg} alt={lineCreditImg} style={{width: "100%", height: "6rem"}} />
                                    <h5>Business Line of Credit</h5>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} mt={1}>
                            <div  style={{width: "85%", height: "16rem", margin: "auto"}} >
                                <img src={equipImg} alt={equipImg} style={{width: "100%", height: "16rem"}} />
                                <h5>Equipment Financing</h5>
                            </div>
                          
                        </Grid>
                        
                        <div style={{paddingLeft: "7rem"}}>
                            <ButtonLineType link="business" title="...And much more" />
                        </div>
                    </Grid>


                    <Grid container xs={12} md={7}>
                        <Grid item xs={12} sx={{padding: ".6rem"}}>
                                <h3 style={{textAlign: "left", marginBottom: "0", marginTop: "2rem"}}>Receive up to USD 2Million while you focus on leading your business to success!</h3>
                                <p style={{textAlign: "left", color: "#0C457F", marginBottom: "0"}}>
                                    MP Capital stands out by offering business owners and starters real financing solutions that enable fluid cash flow and business expansions. Time is money. 
                                    With flexible loan packages and fast processing speed, you gain more opportunities, increase liquidity and capture greater market share. 
                                </p>
                        </Grid> 
                        <Grid item xs={6} lg={4} className={landingCss.WhiteCardsContainer}>
                            <div className={landingCss.WhiteCards}>
                                <div>
                                    <h5>1. Quick & Easy Online Form</h5>
                                    <p>This is some text representing the content body here. It may not look like much now but it will later contain important info in list form</p>
                                </div>
                            </div>
                        </Grid>   

                        <Grid item xs={6} lg={4} className={landingCss.WhiteCardsContainer}>
                            <div className={landingCss.WhiteCards}>
                                <div>
                                    <h5>2. Confirmation of Application</h5>
                                    <p>Our expert would call/email you after your application to help smoothen your application.
                                    Please make sure you fill in your correct email and number.</p>
                                </div>
                            </div>
                        </Grid>  
                        <Grid item xs={6} lg={4} className={landingCss.WhiteCardsContainer}>
                            <div className={landingCss.WhiteCards}>
                                <div>
                                    <h5>3. Submission of Prerequisites</h5>
                                    <p>All applications require <strong>Verifiable Contact Info (VCI)</strong>, applicant history and <strong>Initial Application Deposit (IAD)</strong> to complete application and start receiving funds.</p>
                                </div>
                            </div>
                        </Grid> 
                        <Grid item xs={6} lg={4} className={landingCss.WhiteCardsContainer}>
                            <div className={landingCss.WhiteCards}>
                                <div>
                                    <h5>4. Loan Funded to Wallet</h5>
                                    <p>This is some text representing the content body here. It may not look like much now but it will later contain important info in list form</p>
                                </div>
                            </div>
                        </Grid>   

                        <Grid item xs={6} lg={4} className={landingCss.WhiteCardsContainer}>
                            <div className={landingCss.WhiteCards}>
                                <div>
                                    <h5>5. Withdraw at any Time</h5>
                                    <p>This is some text representing the content body here. It may not look like much now but it will later contain important info in list form</p>
                                </div>
                            </div>
                        </Grid>  
                        <Grid item xs={6} lg={4} className={landingCss.WhiteCardsContainer}>
                            <div className={landingCss.WhiteCards}>
                                <div>
                                    <div>
                                        <h5>6. Repay when due</h5>
                                        <p>Early repayment guarantees increase credit score and lower interest rate on all loans. Our experts will always advise you to make early 
                                        repayment as this will always be to your favour.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>  
            
                    </Grid>

                </Grid>
            </div>{/* END OF BUSINESS WE FINANCE GRID */} 

            

            <div className={landingCss.LightGrid}>
                <h3>Personal Loans We Finance</h3>
                <Grid container >
                        
                    <Grid container xs={12} md={7} sx={{textAlign: "center"}}>

                        <Grid item xs={12} sx={{padding: ".6rem"}}>
                                <h3 style={{textAlign: "left", marginBottom: "0", marginTop: "2rem"}}>Easy approvals, and quick online applications. With our competitive rates, lets us work together.</h3>
                                <p style={{textAlign: "left", color: "#0C457F", marginBottom: "0"}}>
                                    People get personal loans to help with home repairs, luxury purchases, holiday shopping, and more. A loan MP capital can help you get the 
                                    funds you need! Just fill out our simple online form. Follow the short process and, if you are approved, you will receive your funds as soon as the next business day! 
                                </p>
                        </Grid> 
                        <Grid item xs={6} lg={4} className={landingCss.WhiteCardsContainer}>
                            <div className={landingCss.WhiteCards}>
                                <div>
                                    <h5>Heading</h5>
                                    <p>This is some text representing the content body here. It may not look like much now but it will later contain important info in list form</p>
                                </div>
                            </div>
                        </Grid>   

                        <Grid item xs={6} lg={4} className={landingCss.WhiteCardsContainer}>
                            <div className={landingCss.WhiteCards}>
                                <div>
                                    <h5>Heading</h5>
                                    <p>This is some text representing the content body here. It may not look like much now but it will later contain important info in list form</p>
                                </div>
                            </div>
                        </Grid>  
                        <Grid item xs={6} lg={4} className={landingCss.WhiteCardsContainer}>
                            <div className={landingCss.WhiteCards}>
                                <div>
                                    <h5>Heading</h5>
                                    <p>This is some text representing the content body here. It may not look like much now but it will later contain important info in list form</p>
                                </div>
                            </div>
                        </Grid> 
 
                        <Grid item xs={6} lg={4} className={landingCss.WhiteCardsContainer}>
                            <div className={landingCss.WhiteCards}>
                                <div>
                                    <h5>Heading</h5>
                                    <ul>
                                        <li>This is the list form</li>
                                        <li>It will contain info about interest rates</li>
                                        <li>It might also contain payment plan per loan type</li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>  
                      
                    </Grid>


                    <Grid container xs={12} md={5}>
                    <Grid item xs={5} mb={1} >
                            <div  style={{width: "100%", height: "16rem", margin: "auto"}} >
                                <img src={homeKeyImg} alt={homeKeyImg} style={{width: "100%", height: "16rem"}} />
                                <h5>Mortgage Loans</h5>
                            </div>
                        </Grid>
                        <Grid item xs={7}>
                            <Grid item xs={12} mb={2}>
                                <div  style={{width: "90%", height: "6rem", margin: "auto"}} >
                                    <img src={cnholidayImg} alt={cnholidayImg} style={{width: "100%", height: "6rem"}} />
                                    <h5>Vacation Loan</h5>
                                </div>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <div  style={{width: "90%", height: "9rem", margin: "auto"}} >
                                    <img src={educationImg} alt={educationImg} style={{width: "100%", height: "9rem"}} />
                                    <h5>Education/Self Improvement</h5>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid item xs={6} mt={1}>
                            <Grid item xs={12}>
                                <div style={{width: "100%", height: "8rem"}} >
                                    <img src={movingImg} alt={movingImg} style={{width: "100%", height: "8rem"}} />
                                    <h5>Moving Expense</h5>
                                </div>
                              
                            </Grid>
                            
                            <Grid item xs={12} mt={2}>
                                <div  style={{width: "100%", height: "6rem", margin: "auto"}} >
                                    <img src={emergencyImg} alt={emergencyImg} style={{width: "100%", height: "6rem"}} />
                                    <h5>Emergency Funds</h5>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} mt={1}>
                            <div  style={{width: "85%", height: "16rem", margin: "auto"}} >
                                <img src={medicalImg} alt={medicalImg} style={{width: "100%", height: "16rem"}} />
                                <h5>Medical Financing</h5>
                            </div>
                          
                        </Grid>
                        
                        <div style={{paddingLeft: "7rem"}}>
                            <ButtonLineType link="business" title="...And much more" />
                        </div>
            
                    </Grid>

                </Grid>
            </div>{/* END OF PERSONAL LOANS WE FINANCE GRID */} 

            <LoanCalculator />
            <Footer />
            
        </div>
    )
}

export default Categories;