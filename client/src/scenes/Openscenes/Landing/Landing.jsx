import React from 'react';
import MenuBar from "../../../components/global/Open/Menu/Menu"
import Footer from "../../../components/global/Open/Footer/Footer"
import { Box, Grid } from "@mui/material"
import landingCss from "./Landing.module.css"
import 'react-slideshow-image/dist/styles.css'
import { ButtonLineType } from "../../../components/UI/Buttons/Buttons"
import img1 from "../../../shots/coineye.jpg"
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { flipInX } from 'react-animations'
import Radium, {StyleRoot} from 'radium'
import Slider from './Slider';
import Faqs from '../Faqs/Faqs';
import LoanCalculator from '../LoanCalculator/LoanCalculator';

const Landing = () => {

    const styles = {
        bounce: {
          animation: 'x 7s',
          animationName: Radium.keyframes(flipInX, 'flipInX')
        }
    }

   

    return (
        <Box>

            <MenuBar />

            {/* TOP GRID */}
            <Grid container spacing={2} className={landingCss.TopGrid}>

                <Grid item md={5} className={landingCss.LeftGrid} >
                    <StyleRoot>
                        <div style={styles.bounce}>
                            <img src={img1} alt={img1} className={landingCss.ImgGrid} />
                        </div>
                    </StyleRoot>
                </Grid>

                <Grid item md={7} className={landingCss.TopbarRightGrid}>

                    <Slider />

                 </Grid>  {/* END OF RIGHT GRID ON TOP BAR */}   
                
            </Grid>

            {/* SECOND GRID */}
            <Grid container spacing={2} className={landingCss.SecondGrid}>

                <Grid item xs={12} md={6}>
                    <LocalMallIcon className={landingCss.LoanTypeIcons} />
                    <Box className={landingCss.SecondGridCircles} sx={{}} >
                        <div>
                            <h2>Business Loans</h2>
                            
                            <p>Expand your reach with vast lending options and opportunities from an 
                            established global firm. Backed by a team of profesiionals and business specialists, your advisor 
                            tailors our business loan offerings to your peculiar needs, all hassle free.</p>
                        

                            <ButtonLineType link="business" title="How to Access Loan" />
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <SelfImprovementIcon className={landingCss.LoanTypeIcons} />
                    <Box className={landingCss.SecondGridCircles}>
                        <div>
                            <h2>Personal Loans</h2>
                            
                            <p>From consolidating debt to funding home improvements, we can help you make the most out of your loan with flexible 
                            terms and rates that work for you. </p>
                            

                            <ButtonLineType link="personal" title="How to Access Loan" />
                        </div>
                    </Box>
                </Grid>

                
            </Grid>  {/* END OF SECOND GRID */}   

            <LoanCalculator />

            <Faqs />

            <Footer />

        </Box>
        
    )
}

export default Landing;