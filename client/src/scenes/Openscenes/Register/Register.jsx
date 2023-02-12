import MenuBar from "../../../components/global/Open/Menu/Menu"
import React, { useState } from 'react'
import registerCss from "./Register.module.css"
import { Grid, TextField, InputAdornment, FormControl, InputLabel, FilledInput, IconButton, MenuItem } from "@mui/material"
import { Visibility, VisibilityOff } from '@mui/icons-material'
import COUNTRIES from "../../../utils/countries"
import { Link, useNavigate } from "react-router-dom"
import { BtnSubmit } from "../../../components/UI/Buttons/Buttons"
import Footer from "../../../components/global/Open/Footer/Footer"
// import axios from "../../../utils/axios-instance"
import axios from "axios"



const Register = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        passwordRetype: '',
        firstName: '',
        lastName: '',
        otherNames: '',
        mobileCode: '',
        mobileSuffix: '',
        aprtNo: '',
        street: '',
        city: '',
        countryName: '',
        dob: '',
        loanType: '',
        loanPurpose: '',
        otherPurpose: '',
        idType: '',
        loanPurposeOtherTouched: false,
        showPassword: false,
        loanSelectTouched: false
    });
    const [idFile, setIdFile] = useState()
    const navigate = useNavigate()

    const loanTypes = ['Business Loan', 'Personal Loan']
    const businessLoans = ['Small Business Administration (SBA) Loan', 'Term Loan', 'Startup Loan', 'Business Line of Credit', 'Invoice Financing Loan', 'Working Capital Loan', 'Equipment Financing Loan', 'Commercial Real Estate Loan', 'Others']
    const personalLoans = ['Moving Expense Loan', 'Debt Consolidation Loan', 'Medical Loans', 'Wedding Loan', 'Home Renovations/Repairs', 'Vacation Loan', 'Funeral Cost', 'Others']
    const meansOfIDs = ["International Passport", "Driver's License", "National ID" ]
    
    const handleInputChange = (prop) => (event) => {
        if(prop === "loanType") {
            return setValues({ ...values, [prop]: event.target.value, loanSelectTouched: true });
        }
        if(prop === "loanPurpose") {
            if (event.target.value === "Others") {
                return setValues({ ...values, loanPurposeOtherTouched: true, loanPurpose: 'Others' });
            }
        }
 
        setValues({ ...values, [prop]: event.target.value});
    };

    // const handleFileChange = (event) => {
    //     setIdFile(event.target.files[0])
    // }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("otherNames", values.otherNames);
        formData.append("mobileNumber", values.mobileCode + " " + values.mobileSuffix);
        formData.append("countryName", values.countryName);
        formData.append("dob", values.dob);
        formData.append("address", values.aprtNo + " " + values.street + " " + values.city);
        formData.append("loanType", values.loanType);
        formData.append("loanPurpose", values.loanPurpose);
        formData.append("otherPurpose", values.otherNames);
        formData.append("activated", false);
        formData.append("idType", values.idType);
        formData.append("idFile", idFile);

        axios.post('/register', formData)
            .then(response => {
                console.log(response);
            })
            .then(() => {
                navigate('/dashboard')
            })
            .catch (error => {
                console.log(error)
            })
    }

    const loanPurposeSelect =<Grid item xs={12} md={6} sx={{display: values.loanSelectTouched ? 'block' : 'none'}}>
                                {values.loanType === 'Business Loan' ? 
                                    <TextField
                                        select
                                        helperText=""
                                        size="small"
                                        label="Choose Purpose of Business Loan"
                                        sx={{ width: "100%", marginBottom: "1.2rem" }}
                                        value={values.loanPurpose}
                                        onChange={handleInputChange('loanPurpose')}
                                        variant="filled"
                                        >
                                        {businessLoans.map((businessLoan) => (
                                            <MenuItem key={businessLoan} value={businessLoan} >
                                                {businessLoan}
                                            </MenuItem>
                                        ))}
                                    </TextField> 
                                    :
                                    <TextField
                                        select
                                        size="small"
                                        label="Choose Purpose of Personal Loan"
                                        sx={{ width: "100%", marginBottom: "1.2rem" }}
                                        value={values.loanPurpose}
                                        onChange={handleInputChange('loanPurpose')}
                                        variant="filled"
                                    >
                                        {personalLoans.map((personalLoan) => (
                                            <MenuItem key={personalLoan} value={personalLoan} >
                                                {personalLoan}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                }
                            </Grid>

    return (
        <div>
            <MenuBar />
            <div className={registerCss.ContainerOuter}>

                <div className={registerCss.formContainer}>

                    <form onSubmit={formSubmitHandler} encType="multipart/form-data">

                        <h3>Register to apply for loan.</h3>
                        <span>Create your portal with the form below, This will serve as your initial KYC, followed by a call or email from our 
                        specialists to help you with further steps.</span>
                        <br />
                        
                        <span>Already registered? <Link to="/login" style={{color: "#1CB5DE", fontSize: ".9rem", fontWeight: "600"}}>Login Here</Link></span>
                        <br />
                        <span style={{color: "#1CB5DE", fontSize: ".8rem", fontWeight: "600"}}>All fields marked * are required to successfully submit this form.</span>


                        <h4>Basic Information</h4>
                        <hr />
                        <Grid container> {/* BASIC INFO */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="First Name"
                                    variant="filled"
                                    size="small"
                                    sx={{ width: "95%", marginBottom: "1.2rem" }}
                                    onChange={handleInputChange('firstName')}
                                    value={values.firstName}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last Name"
                                    variant="filled"
                                    size="small"
                                    sx={{width: "100%", marginBottom: "1.2rem"}}
                                    onChange={handleInputChange('lastName')}
                                    value={values.lastName}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <TextField
                                    label="Other Names"
                                    variant="filled"
                                    size="small"
                                    sx={{ width: "95%", marginBottom: "1.2rem" }}
                                    onChange={handleInputChange('otherNames')}
                                    value={values.otherNames}
                                />
                            </Grid>
                            <Grid item xs={6} md={5}>
                                <TextField
                                    type="date"
                                    helperText="Date of Birth"
                                    size="small"
                                    label=""
                                    sx={{ width: "100%" }}
                                    value={values.dob}
                                    onChange={handleInputChange('dob')}
                                    variant="filled"
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="file"
                                    helperText="Upload Means of Identification"
                                    size="small"
                                    sx={{ width: "95%", marginBottom: "1.2rem" }}
                                    onChange={event => {
                                        const idFile = event.target.files[0];
                                        setIdFile(idFile)
                                    }}
                                    variant="filled"
                                    accept="image/*"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    select
                                    size="small"
                                    label="Type of ID"
                                    sx={{ width: "100%", marginBottom: "1.2rem" }}
                                    value={values.idType}
                                    onChange={handleInputChange('idType')}
                                    variant="filled"
                                >
                                    {meansOfIDs.map((meansOfID) => (
                                        <MenuItem key={meansOfID} value={meansOfID} >
                                            {meansOfID}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                         {/* END OF BASIC INFO */}

                        <h4>Login Information</h4>
                        <hr />
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    variant="filled"
                                    size="small"
                                    sx={{width: "95%", marginBottom: "1.2rem"}}
                                    onChange={handleInputChange('email')}
                                    value={values.email}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl variant="filled" size="small" sx={{width: "100%", marginBottom: "1.2rem"}} required>
                                    <InputLabel htmlFor="filled-adornment-password">Create Password</InputLabel>
                                    <FilledInput
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleInputChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl variant="filled" size="small" sx={{width: "95%", marginBottom: "1.2rem"}} required>
                                    <InputLabel htmlFor="filled-adornment-password-retype">Retype Password</InputLabel>
                                    <FilledInput
                                        
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.passwordRetype}
                                        onChange={handleInputChange('passwordRetype')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                        </Grid> {/* END OF LOGIN INFO */}

                        
                        <h4>Contact Information</h4>
                        <hr />   
                        <Grid container item xs={12} md={7}>
                            <Grid item xs={4} >
                                <TextField
                                    select
                                    helperText="Country Code *"
                                    size="small"
                                    label="Country Code"
                                    sx={{ width: "95%"}}
                                    value={values.mobileCode}
                                    onChange={handleInputChange('mobileCode')}
                                    variant="filled"
                                    required
                                    >
                                    {COUNTRIES.map((country) => (
                                        <MenuItem key={country.mobileCode} value={country.mobileCode}>
                                            {country.mobileCode}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item xs={8}>
                                <TextField
                                    label="Mobile Number"
                                    variant="filled"
                                    type="number"
                                    size="small"
                                    sx={{ width: "100%", marginBottom: "1.2rem"}}
                                    onChange={handleInputChange('mobileSuffix')}
                                    value={values.mobileSuffix}
                                    required
                                />
                            </Grid>
                        </Grid>
                        
                        <Grid container item xs={12}>
                        
                            <Grid item xs={6} md={2}>
                                <TextField
                                    label="Aprt/House No."
                                    variant="filled"
                                    size="small"
                                    sx={{width: "95%", marginBottom: "1.2rem"}}
                                    onChange={handleInputChange('aprtNo')}
                                    value={values.houseNo}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <TextField
                                    label="Street"
                                    variant="filled"
                                    size="small"
                                    sx={{width: "95%", marginBottom: "1.2rem"}}
                                    onChange={handleInputChange('street')}
                                    value={values.street}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <TextField
                                    label="City"
                                    variant="filled"
                                    size="small"
                                    sx={{width: "95%", marginBottom: "1.2rem"}}
                                    onChange={handleInputChange('city')}
                                    required
                                />
                            </Grid>

                            <Grid item xs={6} md={4}>
                                <TextField
                                    select
                                    helperText="Country of Residence"
                                    size="small"
                                    label=" Country"
                                    variant="filled"
                                    sx={{ width: "100%", marginBottom: "1.2rem" }}
                                    value={values.countryName}
                                    onChange={handleInputChange('countryName')}
                                    required
                                    >
                                    {COUNTRIES.map((country) => (
                                        <MenuItem key={country.name} value={country.name}>
                                            {country.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid> {/* END OF CONTACT INFO */}

                           
                        
                        <h4>Loan Information</h4>
                        <hr /> 
                        <Grid container>

                            <Grid item xs={12} md={values.loanSelectTouched ? 6 : 12}>
                                <TextField
                                    select
                                    helperText="Select Loan Category"
                                    size="small"
                                    label="Choose Loan Category"
                                    sx={{ width: values.loanSelectTouched ? "95%" : "100%", marginBottom: "1.2rem" }}
                                    value={values.loanType}
                                    onChange={handleInputChange('loanType')}
                                    variant="filled"
                                    required
                                    >
                                    {loanTypes.map((loanType) => (
                                        <MenuItem key={loanType} value={loanType} >
                                            {loanType}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            {loanPurposeSelect}
       
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Specify Other Purposes"
                                    multiline
                                    minRows={3}
                                    maxRows={3}
                                    size="small"
                                    sx={{ width: "100%", display: !values.loanPurposeOtherTouched ? "none" : "", marginBottom: "1.2rem" }}
                                    onChange={handleInputChange('otherPurpose')}
                                    value={values.otherPurpose}
                                    variant="filled"
                                 />
                            </Grid>
                        </Grid> {/* END OF LOAN INFO */}

                        
                        <div style={{textAlign: "center"}}>
                            <BtnSubmit>Submit Application</BtnSubmit>
                        </div>

                    </form>

                </div> {/*  END OF formContainer */}

            </div> {/*  END OF ContainerOuter */}

            <Footer />
        </div>
    )
}

export default Register;