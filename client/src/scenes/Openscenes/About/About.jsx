import React from "react";
import MenuBar from "../../../components/global/Open/Menu/Menu";
import aboutCss from "./About.module.css"
import landingCss from "../Landing/Landing.module.css"
import { Grid } from "@mui/material"
import { ButtonGreen, ButtonLineType } from "../../../components/UI/Buttons/Buttons"
import Faqs from "../Faqs/Faqs";
import Footer from "../../../components/global/Open/Footer/Footer";

const About = () => {
    return (
        
        <div>
            <MenuBar />

            <div className={aboutCss.TopSection}>
                <div className={aboutCss.TopContent}>
                    <h1 style={{color: "white", fontSize: "2rem", marginBottom: "2.5rem" }}>About MP Capital</h1>
                    <ButtonGreen link='loan-calc' title="Calculate Loan Option" />
                </div>
            </div>

            <div className={landingCss.LightGrid}>
                <Grid container>
                    <Grid item md={6}>
                        <h3 style={{textAlign: "left"}}>Why Choose MP Capital?</h3>

                        <div className={aboutCss.TextContainer}>
                            <p>
                                MP Capital is a business and personal loan offering consultancy firm with Head Quarters based in Singapore and subsidiaries in other parts of Europe and Asia. 
                                Our main objectives are to assist visionary people looking for funding for several lucrative/developmental purposes.
                            </p>
                            <p>
                                And so over the years we have developed several strategies to reduce interest rates (Our Interest rates go  
                                <strong> as low as 1% and maximum of 5%</strong> no matter the loan); making us one of the best companies with the lowest interest rates in the whole of 
                                Asia and Europe.
                            </p>
                            <p>
                                While we have constantly and unfaialingly raised funds for our clients, we have also kept the process hassle free for you and maintained flexibility in our payment 
                                schedules to fit our ever diverse family of clients.
                            </p>
                            <p>
                                <ButtonLineType title="Join Us Today!" link="register" />
                            </p>
                        
                        </div>

                    </Grid>

                    <Grid item md={6}>
                        <div className={aboutCss.TextContainer}>
                            <h3 style={{textAlign: "left"}}>Our Expert Team</h3>
                            <p>
                                An organisation is nothing without its workforce, and so when exploying our experts, we lay particular emphasis on deligence, professionalism and technical know how.
                            </p>
                            <p>
                                We have also been known for our integration of technology to our every day activities to make our delivery faster and seamless for you our cients.
                            </p>
                            <p>
                                Our commitment is to help you grow and secure your vision. We are committed to supporting you and helping you find financing solutions. 
                                With us, you can be sure that the funding will come with lower costs than you would get with traditional financing companies. 
                            </p>
                            <p>
                                <ButtonLineType title="Contact Us!" link="contact" />
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <Faqs />
            <Footer />

        </div>
    )
}

export default About;