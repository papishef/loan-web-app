import React, { useState } from "react"
import registerCss from "../../Openscenes/Register/Register.module.css"
import { Grid, TextField, InputAdornment, MenuItem } from "@mui/material"
import { BtnSubmit } from "../../../components/UI/Buttons/Buttons"
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles({
    root: {
      width: '90%',
      margin: '10px',
      "& .MuiOutlinedInput-input": {
        color: "#0C457F"
      },
      "& .MuiInputLabel-root": {
        color: "#0C457F"
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#0C457F"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "#010148"
      },
      "&:hover .MuiInputLabel-root": {
        color: "#010148"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#010148"
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

const Apply = () => {

    const classes = useStyles();

    const [values, setValues] = useState({
        firstName: 'Laba',
        lastName: 'Don',
        loanType: '',
        loanPurpose: '',
        otherPurpose: '',
        loanPurposeOtherTouched: false,
        loanSelectTouched: false
    });

    const loanTypes = ['Business Loan', 'Personal Loan']
    const businessLoans = ['Small Business Administration (SBA) Loan', 'Term Loan', 'Startup Loan', 'Business Line of Credit', 'Invoice Financing Loan', 'Working Capital Loan', 'Equipment Financing Loan', 'Commercial Real Estate Loan', 'Others']
    const personalLoans = ['Moving Expense Loan', 'Debt Consolidation Loan', 'Medical Loans', 'Wedding Loan', 'Home Renovations/Repairs', 'Vacation Loan', 'Funeral Cost', 'Others']
    const loanDurations = ["6 Months", "12 Months", "18 Months", "24 Months", "36 Months", "48 Months", "60 Months"]

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

    const formSubmitHandler = (e) => {
        e.preventDefault();

        console.log(values)
    }

    const loanPurposeSelect =<Grid item xs={12} md={6} sx={{display: values.loanSelectTouched ? 'block' : 'none'}}>
                                {values.loanType === 'Business Loan' ? 
                                    <TextField
                                        select
                                        size="small"
                                        className={classes.root}
                                        label="Choose Purpose of Business Loan"
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
                                        className={classes.root}
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
        <div className={registerCss.formContainer}>
            <form onSubmit={formSubmitHandler}>
                <h3>Fill Form to Get Loan</h3>
                <span style={{color: "#1CB5DE", fontSize: ".8rem", fontWeight: "600", textAlign: "left !important"}}>All fields are required</span>
                <br />

                <Grid container> 
                    <Grid item xs={12} sm={6} sx={{padding: "0"}}>
                        <TextField
                            label="First Name"
                            variant="filled"
                            size="small"
                            className={classes.root}
                            onChange={handleInputChange('firstName')}
                            value={values.firstName}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            variant="filled"
                            size="small"
                            className={classes.root}
                            onChange={handleInputChange('lastName')}
                            value={values.lastName}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            select
                            size="small"
                            label="Choose Loan Category"
                            value={values.loanType}
                            onChange={handleInputChange('loanType')}
                            variant="filled"
                            className={classes.root}
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

                    <Grid item xs={12} md={6}>
                            <TextField
                                id="amount"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                label="Amount"
                                type="number"
                                variant="filled"
                                className={classes.root}
                                value={values.amount}
                                onChange={handleInputChange('amount')}
                            />                      
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            id="duration"
                            variant="filled"
                            select
                            size="small"
                            className={classes.root}
                            label="Payment Duration"
                            value={values.duration}
                            onChange={handleInputChange('duration')}
                        >
                            {loanDurations.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>                                    
                    </Grid>
                   
                </Grid>


                         
                <div style={{textAlign: "center"}}>
                    <BtnSubmit>Submit Application</BtnSubmit>
                </div>
            </form>
        </div>
    )
}

export default Apply;