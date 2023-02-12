import React from "react"
import MenuBar from "../../../components/global/Open/Menu/Menu"
import Footer from "../../../components/global/Open/Footer/Footer"
import aboutCss from "../About/About.module.css"
import contactCss from "./Contact.module.css"
import { ButtonGreen, BtnSubmit } from "../../../components/UI/Buttons/Buttons"
import { Grid, TextField } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from "@mui/styles";
import contactImg from "../../../shots/contact.png"



const useStyles = makeStyles({
    root: {
    width: '90%',
    margin: '0 auto',
    "& .MuiOutlinedInput-input": {
        color: "rgb(240, 240, 240, 0.5)"
    },
    "& .MuiInputLabel-root": {
        color: "rgb(240, 240, 240, 0.5)"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgb(240, 240, 240, 0.5)"
    },
    "&:hover .MuiOutlinedInput-input": {
        color: "rgb(240, 240, 240)"
    },
    "&:hover .MuiInputLabel-root": {
        color: "rgb(240, 240, 240)"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgb(240, 240, 240)"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "white"
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "white"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
    }
    }
});

const Contact = () => {

    const classes = useStyles();


    return (
        <div>
            <MenuBar />
                        
            <div className={aboutCss.TopSection}>
                <div className={aboutCss.TopContent}>
                    <h1 style={{color: "white", fontSize: "2rem", marginBottom: "2.5rem" }}>Contact Us</h1>
                    <ButtonGreen link='register' title="Get Loan Now" />
                </div>
            </div>

            <Grid container sx={{backgroundColor: "#D2D2D2"}}>
                <Grid item xs={12} md={8}>
                    <div className={contactCss.ContactContainer}>

                        <div className={contactCss.ContactFormWrapper}>
                            <h2>Arrange a Callback</h2>
                            
                            <Grid container>
                                
                                <Grid item xs={12} md={6} mb={4}>
                                    <TextField 
                                        id="fullName"
                                        className={classes.root} 
                                        label="Full Name" 
                                        variant="outlined" 
                                        type="text"
                                        size="small"    
                                    />                                
                                </Grid>
                                
                                <Grid item xs={12} md={6} mb={4}>
                                    <TextField 
                                        id="contact-number"
                                        className={classes.root} 
                                        label="Contact Number"
                                        type="number" 
                                        variant="outlined" 
                                        size="small"    
                                    />                                
                                </Grid>

                                <Grid item xs={12} md={6} mb={4}>
                                    <TextField 
                                        id="email"
                                        className={classes.root} 
                                        label="Email Address" 
                                        variant="outlined" 
                                        type="email"
                                        size="small"    
                                    />                                
                                </Grid>

                                <Grid item xs={12} md={6} mb={4}>
                                    <FormControl size="small" className={classes.root}>
                                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                        <OutlinedInput
                                            id="amount"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            label="Intended"
                                        />
                                    </FormControl>                                
                                </Grid>

                                <Grid item xs={12} mb={4}>
                                    <TextField
                                        id="additional-message"
                                        className={classes.root}
                                        label="Additional Message"
                                        sx={{width: "100%"}}
                                        multiline
                                        rows={4}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <BtnSubmit width="95%" submit={''}>Request Callback</BtnSubmit>                           
                                </Grid>
                            </Grid>


                        </div>

                    </div>
                </Grid>

                <Grid item xs={12} md={4}>
                    <div className={contactCss.AddressContainer}>

                        <img alt={contactImg} src={contactImg} />

                        <div>
                            <LocationOnIcon /> 10 Anson Road, #10-11 International Plaza Singapore 079903
                        </div>

                        <div>
                            <LocationOnIcon /> 10 Anson Road, #10-11 International Plaza Singapore 079903
                        </div>

                        <div>
                            Got Questions? Chat with 
                            <a href={'https://api.whatsapp.com/send?phone=2348137934523'} style={{textDecoration: "none", color: "#3f9db7", fontWeight: "700"}}> Carlos</a> or  
                            <a href={'https://api.whatsapp.com/send?phone=2348137934523'} style={{textDecoration: "none", color: "#3f9db7", fontWeight: "700"}}> Zelda</a> on 
                            <a href={'https://api.whatsapp.com/send?phone=2348137934523'} style={{textDecoration: "none", color: "#3f9db7"}}> <WhatsAppIcon fontSize="large" /></a>
                        </div>

                    </div>
                </Grid>
            </Grid>


            <Footer />
        </div>

    )
}

export default Contact