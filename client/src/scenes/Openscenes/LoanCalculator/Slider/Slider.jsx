import React from 'react';
import { slideImgs } from "../../../../utils/slideImgs"
import { Zoom } from 'react-slideshow-image'
import { ButtonGreen } from "../../../../components/UI/Buttons/Buttons"
import AnimatedText from 'react-animated-text-content'
import landingCss from "../../Landing/Landing.module.css"
import { Grid, } from "@mui/material"
import loanCalcCss from "../LoanCalculator.module.css"


const Slider = () => {
    return (
        <Zoom duration={6000} scale={0.7}>
            {slideImgs.map((slideImg, index) => (
                <div className={"each-slide " + loanCalcCss.EachSlide} key={index}  style={{'backgroundImage': `url(${slideImg.url})`}}>
                    <AnimatedText
                        className={landingCss.AnimatedSubtextHeader}
                        type="chars" // animate words or chars
                        animationType="diagonal"
                        interval={0.083}
                        duration={1}
                        tag="h3"
                        threshold={0.1}
                    >
                        {slideImg.title2}
                    </AnimatedText>

                    <AnimatedText
                        className={landingCss.AnimatedSubtext}
                        type="words" // animate words or chars
                        animationType="float"
                        interval={0.07}
                        duration={0.9}
                        tag="div"
                        includeWhiteSpaces
                        threshold={0.1}
                    >
                        {slideImg.text2}
                    </AnimatedText>

            
                    <Grid container sx={{my: '10px'}}>
                        <Grid item xs={12}>
                            <ButtonGreen link="register" title="Get Loan Now" />
                        </Grid>
                    </Grid>
                </div>
            ))}
        </Zoom> 
    )
}

export default React.memo(Slider)