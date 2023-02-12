import React from "react"
import AnimatedText from 'react-animated-text-content'
import { ButtonGreen } from "../../../components/UI/Buttons/Buttons"
import { slideImgs } from '../../../utils/slideImgs';
import { Zoom } from 'react-slideshow-image'
import { Grid } from "@mui/material"
import landingCss from "./Landing.module.css"

const Slider = () => {


    return (
        <Zoom duration={6000} scale={0.7}>
            {slideImgs.map((slideImg, index) => (
                <div className={"each-slide " + landingCss.EachSlide} key={index}  style={{'backgroundImage': `url(${slideImg.url})`}}>
                    <AnimatedText
                        className={landingCss.AnimatedSubtextHeader}
                        type="chars" // animate words or chars
                        animationType="diagonal"
                        interval={0.083}
                        duration={1}
                        tag="h1"
                        threshold={0.1}
                    >
                        {slideImg.title}
                    </AnimatedText>

                    <AnimatedText
                        className={landingCss.AnimatedSubtext}
                        type="words" // animate words or chars
                        animationType="throw"
                        interval={0.07}
                        duration={0.9}
                        tag="div"
                        includeWhiteSpaces
                        threshold={0.1}
                    >
                        {slideImg.text}
                    </AnimatedText>

            
                    <Grid container sx={{my: '80px'}}>
                        <Grid item xs={slideImg.btnTitle2 ? 6 : 12} sx={{textAlign: slideImg.btnTitle2 ? 'right' : 'center'}} >
                            <ButtonGreen link="register" title={slideImg.btnTitle2 ? "Get Business Loans" : "Get " + slideImg.title} />
                        </Grid>
                        {slideImg.btnTitle2 ? 
                            <Grid item xs={6} sx={{textAlign: 'left', borderLeft: "2px solid #0C457F"}}>
                                <ButtonGreen link="register" title={"Get " + slideImg.btnTitle2} />
                            </Grid> : null
                        }
                    </Grid>
                </div>
            ))}
        </Zoom> 
    )
}

export default React.memo(Slider);