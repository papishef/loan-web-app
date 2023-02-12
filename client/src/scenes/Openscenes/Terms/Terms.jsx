import React from "react"
import MenuBar from "../../../components/global/Open/Menu/Menu"
import aboutCss from "../About/About.module.css"
import landingCss from "../Landing/Landing.module.css"
import termsCss from "./Terms.module.css"
import { ButtonGreen } from "../../../components/UI/Buttons/Buttons"
import { Grid } from "@mui/material"
import Footer from "../../../components/global/Open/Footer/Footer";
import dreamImg from "../../../shots/dream.png"


const Terms = () => {

    return (
        <div>
            <MenuBar />

            <div className={aboutCss.TopSection}>
                <div className={aboutCss.TopContent}>
                    <h1 style={{color: "white", fontSize: "2rem", marginBottom: "2.5rem" }}>Terms & Conditions</h1>
                    <ButtonGreen link='contact' title="Arrange a Callback" />
                </div>
            </div>

            <div className={landingCss.LightGrid}>
                <Grid container>
                    <Grid item md={8}>
                        <h3 style={{textAlign: "left"}}>Privacy & Terms of Use</h3>

                        <div className={aboutCss.TextContainer}>
                            <p>This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.</p>
                            <p>We will not use or share your information with anyone except as described in this privacy policy.</p>
                            <p>
                                We use your personal information for providing and improving the service. By using the service, you agree to the collection and use of 
                                information in accordance with this policy.
                            </p>
                        </div>

                        <h4 style={{textAlign: "left"}}>Information Collection And Use</h4>
                        <hr style={{width: "90%", float: "left"}} /><br />
                        <div className={aboutCss.TextContainer}>
                            <p>
                                While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or 
                                identify you. Personally identifiable information may include, but is not limited to, your name, phone number, postal address and other 
                                information (“personal information”).
                            </p>
                        </div>

                        <h4 style={{textAlign: "left"}}>Cookies</h4>
                        <hr style={{width: "90%", float: "left"}} /><br />
                        <div className={aboutCss.TextContainer}>
                            <p>
                                Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web 
                                site and stored on your computer’s hard drive.
                            </p>
                            <p>
                                We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
                                if you do not accept cookies, you may not be able to use some portions of our service.
                            </p>
                        </div>

                        <h4 style={{textAlign: "left"}}>Security</h4>
                        <hr style={{width: "90%", float: "left"}} /><br />
                        <div className={aboutCss.TextContainer}>
                            <p>
                                The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic 
                                storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                            </p>
                        </div>
                        
                        <h4 style={{textAlign: "left"}}>Service Providers</h4>
                        <hr style={{width: "90%", float: "left"}} /><br />
                        <div className={aboutCss.TextContainer}>
                            <p>
                                We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist
                                us in analyzing how our service is used.
                            </p>
                            <p>These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                        </div>
                                                
                        <h4 style={{textAlign: "left"}}>Log Data</h4>
                        <hr style={{width: "90%", float: "left"}} /><br />
                        <div className={aboutCss.TextContainer}>
                            <p>
                                We collect information that your browser sends whenever you visit our service (“log data”). This log data may include information such as your computer’s internet protocol (“IP”) 
                                address, browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages and other statistics.
                            </p>
                        </div>

                        <h4 style={{textAlign: "left"}}>Links To Other Sites</h4>
                        <hr style={{width: "90%", float: "left"}} /><br />
                        <div className={aboutCss.TextContainer}>
                            <p>
                                Our service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you 
                                to review the Privacy Policy of every site you visit. We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                            </p>
                        </div>
                        
                        <h4 style={{textAlign: "left"}}>Children’s Privacy</h4>
                        <hr style={{width: "90%", float: "left"}} /><br />
                        <div className={aboutCss.TextContainer}>
                            <p>Our service does not address anyone under the age of 21 (“children”).</p>
                            <p>
                                We do not knowingly collect personally identifiable information from children and teenagers under 21. If you are a parent or guardian and you are aware that your children has provided us with their 
                                personal information, please contact us. If we discover that a child under 21 has provided us with their personal information, we will delete such information from our servers immediately.
                            </p>
                        </div>


                        <h4 style={{textAlign: "left"}}>Changes To This Privacy Policy</h4>
                        <hr style={{width: "90%", float: "left"}} /><br />
                        <div className={aboutCss.TextContainer}>
                            <p>We may update our privacy policy from time to time. You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.</p>
                            <p>For any further inquires, please email us at support@mpcapital.com and we will get back to you as soon as possible.</p>
                        </div>
                    </Grid>

                    <Grid item md={4}>
                        <div className={termsCss.ActionBox}>
                            <img src={dreamImg} alt={dreamImg} />
                            <h3>Don't just dream, reach for your dreams today!</h3>

                            <ButtonGreen link="contact" title="Arrange a Callback" />
                        </div>
                    </Grid>
                </Grid>
            </div>

            <Footer />

        </div>
    )
}

export default Terms;