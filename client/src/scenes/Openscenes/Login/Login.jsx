import MenuBar from "../../../components/global/Open/Menu/Menu"
import React, { useState } from 'react'
import { Grid, TextField, FormControl, InputLabel, FilledInput, IconButton, InputAdornment } from "@mui/material"
import registerCss from "../Register/Register.module.css"
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Link } from "react-router-dom"
import { BtnSubmit } from "../../../components/UI/Buttons/Buttons"
import Footer from "../../../components/global/Open/Footer/Footer"



const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
        error: false
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleInputChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log("form submitted" + values)
    }
    
    return (
            
            <div>
                <MenuBar />

                <div className={registerCss.ContainerOuter} style={{padding: "10rem 0"}}>

                    <div className={registerCss.formContainer} style={{width: "400px"}}>

                        <form onSubmit={formSubmitHandler} method="POST">
                            <h3>Login to continue.</h3>

                            <span>New Member? <Link to="/register" style={{color: "#1CB5DE", fontSize: ".9rem", fontWeight: "600"}}>Apply Here</Link></span>
                            
                            <Grid container mt={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        variant="filled"
                                        size="small"
                                        sx={{width: "100%", marginBottom: "1.2rem"}}
                                        onChange={handleInputChange('email')}
                                        value={values.email}
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl variant="filled" size="small" sx={{width: "100%", marginBottom: "1.2rem"}} required>
                                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                        <FilledInput
                                            required
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleInputChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        edge="end"
                                                        >
                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <span><Link to="/register" style={{color: "#1CB5DE", fontSize: ".9rem", fontWeight: "600"}}>Forgotten Password?</Link></span>

                            <div style={{textAlign: "center", width: "100% !important", marginTop: "1.6rem"}}>
                                <BtnSubmit width="100%">Login</BtnSubmit>
                            </div>

                        </form>

                    </div>

                </div>

                <Footer />
            </div>

    )
}

export default Login;