import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import MenuBar from "../../../components/global/Open/Menu/Menu"
import Footer from "../../../components/global/Open/Footer/Footer"
import { Grid, } from "@mui/material"
import loanCalcCss from "./LoanCalculator.module.css"
import { TextField, MenuItem } from '@mui/material';
import { makeStyles } from "@mui/styles";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { BtnSubmit, ButtonWhite } from "../../../components/UI/Buttons/Buttons"
import Slider from "./Slider/Slider"
import Modal from '../../../components/UI/Modal/Modal';


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

const LoanCalculator = () => {
    const [calcValues, setCalcValues] = useState({
        loanType: '',
        duration: '',
        amount: '',
        interest: '',
        rate: '',
        monthly: '',
        total: '',
        loading: false,
        modalOpen: false,
        error: false,
        errorMsg: ""
    })

    const classes = useStyles();
    const location = useLocation()

    const loanTypes = ["Business Loan", "Personal Loan"]
    const loanDurations = ["6 Months", "12 Months", "18 Months", "24 Months", "36 Months", "48 Months", "60 Months"]


    useEffect(() => {

        if (calcValues.modalOpen === true) {
            let rate
            let interest
            let monthly
            let total

            if (calcValues.loanType === "Business Loan") {

                switch (calcValues.duration) {
                    case ("6 Months"):
                        rate = 3.0
                        interest = Math.ceil((calcValues.amount * rate * 0.5)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/6)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("12 Months"):
                        console.log(calcValues.modalOpen);
                        rate = 3.5
                        interest = Math.ceil((calcValues.amount * rate * 1)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/12)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("18 Months"):
                        rate = 4.0
                        interest = Math.ceil((calcValues.amount * rate * 1.5)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/18)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("24 Months"):
                        rate = 4.5
                        interest = Math.ceil((calcValues.amount * rate * 2)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/24)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("36 Months"):
                        rate = 5.0
                        interest = Math.ceil((calcValues.amount * rate * 3)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/36)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("48 Months"):
                        rate = 5.5
                        interest = Math.ceil((calcValues.amount * rate * 4)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/48)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("60 Months"):
                        rate = 6.0
                        interest = Math.ceil((calcValues.amount * rate * 5)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/60)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
        
                    default:

                        break;
                }

            }

            if (calcValues.loanType === "Personal Loan") {
                
                switch (calcValues.duration) {
                    case ("6 Months"):
                        rate = 2.5
                        interest = Math.ceil((calcValues.amount * rate * 0.5)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/6)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("12 Months"):
                        rate = 3.0
                        interest = Math.ceil((calcValues.amount * rate * 1)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/12)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("18 Months"):
                        rate = 3.5
                        interest = Math.ceil((calcValues.amount * rate * 1.5)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/18)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("24 Months"):
                        rate = 4.0
                        interest = Math.ceil((calcValues.amount * rate * 2)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/24)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("36 Months"):
                        rate = 4.5
                        interest = Math.ceil((calcValues.amount * rate * 3)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/36)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("48 Months"):
                        rate = 5.0
                        interest = Math.ceil((calcValues.amount * rate * 4)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/48)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
                    case ("60 Months"):
                        rate = 5.5
                        interest = Math.ceil((calcValues.amount * rate * 5)/100)
                        total = Math.ceil(+calcValues.amount + +interest)
                        monthly = Math.ceil(total/60)
                        setCalcValues({...calcValues, interest: interest, total: total, monthly: monthly, rate: rate, loading: false})
                        break;
        
                    default:                    
                        
                    break;
                }

            }
        }
        
    }, [calcValues]);

    
    const handleInputChange = (prop) => (event) => {
        setCalcValues({ ...calcValues, [prop]: event.target.value });
    };

    const handleCalcSubmit = () => {

        if (calcValues.loanType !== "" && calcValues.duration !== "" && calcValues.amount !== "") {
            setCalcValues({ ...calcValues,  modalOpen: true, loading: true, error: false});
        } else {
            setCalcValues({ ...calcValues, error: true, errorMsg: "Fill in blank fields"});
        }
         
    }

    const handleModalClose = () => {
        setCalcValues({ ...calcValues, loanType: '', amount: '', duration: '',  modalOpen: false,});
    }

    const errorMessage = calcValues.error ? <div style={{color: "rgb(111, 14, 14)", backgroundColor: "white"}}>{calcValues.errorMsg}</div> : ""

    return (
        
        <div>
            {location.pathname === "/loan-calc" ? <MenuBar /> : ''}
            {/* SLIDER */}
            <div className={location.pathname === "/loan-calc" ? loanCalcCss.TopGrid : ''}>
                {location.pathname === "/loan-calc" ? 
                <div className={loanCalcCss.TopContainer}>
                    <Slider />
                </div> : ""}

                {/* LOAN CALC SEGMENT */}
                <div className={loanCalcCss.CalcWrapper}>
                    <h2>Loan Calculator</h2>
                    <Grid container>

                        <Grid item md={5}>
                            <ul>
                                <li>Check out the value estimate of any loans and mortgages you would like to take.</li>
                                <li>The interest rate on any loan is directly proportional to the loan duration</li>
                            </ul>
                        </Grid>
                        <Grid container item md={7}>
                            
                            <div className={loanCalcCss.CalcContainer}>

                                <Grid container>
                                    <Grid item xs={12} md={6} mb={4}>
                                        <TextField
                                            id="outlined-select"
                                            select
                                            className={classes.root}
                                            size="small"
                                            label="Loan Type"
                                            value={calcValues.loanType}
                                            onChange={handleInputChange('loanType')}
                                        >
                                            {loanTypes.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </TextField>                                    
                                    </Grid>
                                    <Grid item xs={12} md={6} mb={4}>
                                        <TextField
                                            id="outlined-select"
                                            select
                                            className={classes.root}
                                            size="small"
                                            label="Payment Duration"
                                            value={calcValues.duration}
                                            onChange={handleInputChange('duration')}
                                        >
                                            {loanDurations.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </TextField>                                    
                                    </Grid>

                                    <Grid item xs={12} md={6} mb={4}>
                                        <FormControl size="small" className={classes.root}>
                                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                            <OutlinedInput
                                                id="amount"
                                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                label="Amount"
                                                type="number"
                                                value={calcValues.amount}
                                                onChange={handleInputChange('amount')}
                                            />
                                        </FormControl>                                
                                    </Grid>

                                    <Grid item xs={12} md={6} >
                                        <BtnSubmit width="90%" submit={handleCalcSubmit}>Calculate</BtnSubmit>                           
                                    </Grid>
                                    
                                </Grid>
                                {errorMessage} 
                            </div>

                        </Grid>

                    </Grid>

                </div>
            </div>

            <Modal modalOpen={calcValues.modalOpen} loading={calcValues.loading}>
                {/* <div style={{position: "absolute", zIndex: 100, width: "100%", height: "100%", backgroundColor: "white"}} onClick={handleModalClose}>

                </div> */}
                <div title='Close' className={loanCalcCss.CloseIcon} onClick={handleModalClose}>
                        X
                </div>
                <div>For a <strong>{calcValues.loanType}</strong> of <strong>${calcValues.amount}</strong> at <strong>{calcValues.rate}% rate</strong> with a <strong>{calcValues.duration} duration</strong>; <br /> Interest: <strong>{calcValues.interest}</strong>. <br />Your Monthly payment will be <strong>{calcValues.monthly}</strong>. <br />Your Total payment will be <strong>{calcValues.total}</strong>.</div>
                <div style={{padding: '.5rem 0', margin: "1rem auto"}}>
                    <ButtonWhite title="Apply for Loan" link="register" />
                </div>
                <div style={{padding: '.1rem 0'}}>
                    <ButtonWhite title="Speak With an Adviser" link="contact" />
                </div>
            </Modal>
            {/* CONDITIONALLY DISPLAY FOOTER  */}
            {location.pathname === "/loan-calc" ? <Footer /> : ''}
        </div>
    )
}



export default LoanCalculator;