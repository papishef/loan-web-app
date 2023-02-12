import React, { useState } from "react";
import landingCss from "../Landing/Landing.module.css"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Faqs = () => {
    const [expanded, setExpanded] =  useState(false);
    
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        
        <div className={landingCss.AccordionContainer} id='faqs'>
            <h3>Frequently Asked Questions</h3>
            <Accordion className={landingCss.Accordion} expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: '600', fontSize: '1.07rem'}}>
                        Will my credit profile affect my ability to get the best loan rates?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, the better your credit rating the higher your chances for getting the lowest interest rates on your loan. 
                        For those with a bad credit profile, the higher interest rates signifies the increased risk on our part in lending you money.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={landingCss.Accordion} expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: '600', fontSize: '1.07rem'}}>
                        How likely am I to be accepted for a loan?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Generally, getting a loan with us is very easy and in few steps. But being accepted comes with a few prerequisites.
                        This will depend entirely upon the nature of your loan request and your employment or business history (Since our 
                        loaning system is backed by the "No Collateral Policy"). We have loans for everyone though, 
                        and so it is unlikely that you will not be accepted for any loans at all.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={landingCss.Accordion} expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: '600', fontSize: '1.07rem'}}>
                        Why is interest higher for short term loans?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Interest rates are generally higher on shorter term loans, as there are increased administration costs in setting up the 
                        loan.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={landingCss.Accordion} expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: '600', fontSize: '1.07rem'}}>
                        What if my financial circumstances change during a loans term?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        If your financial circumstances improve, you will be able to pay your loan off early, or arrange to change your payment plan in some way. 
                        You will need to discuss details of this with your creditors.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={landingCss.Accordion} expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: '600', fontSize: '1.07rem'}}>
                        How long will it take to get the money?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Depending on the loan amount, time it takes to meet the application requirements and application time frame, there may be a waiting period before you receive funds. Some 
                        loans process within 48 hours, but others may take a bit longer (usually a maximum of 1 week). Take these time periods into account when deciding which 
                        loan product to apply for.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={landingCss.Accordion} expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: '600', fontSize: '1.07rem'}}>
                        What do I need to take out a loan?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Make sure you speak to one of our experts via email or our contact page to know what specific documentation fits your need. 
                        Generally speaking, you will need your social security and basic employment and income information to apply for a loan with us. 
                        Once we receive the application, we will determine if any additional information is required. 
                        Also you’ll need to verify your identity, and state the purpose for your loan.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={landingCss.Accordion} expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: '600', fontSize: '1.07rem'}}>
                        What purposes can I obtain a loan for?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'}>
                        We offer loans for so many reasons including:
                        <ul>
                            <li>Starting up a new business</li>
                            <li>Putting a deposit down for a house</li>
                            <li>Beginning an undergraduate or post-graduate course at a university</li>
                            <li>Getting Hitched/Married to that special person</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={landingCss.Accordion} expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8bh-content"
                    id="panel8bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: '600', fontSize: '1.07rem'}}>
                        What is the interest rate on the loan?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We brag about some of the lowest interest rates and longest repayment time in the lending industry across the world. 
                        Depending on your credit score and other factors, the interest rate may impact your decision to borrow. Think of an 
                        interest rate as an expense for borrowing money from a lender. The amount of interest is bundled with your payments.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <Accordion className={landingCss.Accordion} expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel9bh-content"
                    id="panel9bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: '600', fontSize: '1.07rem'}}>
                        How does the loan repayment work?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We offer a wide range of flexible payment plans to fit your current finances and that is why we need an accurate estimate 
                        (and possibly data) on your monthly/yearly income. Your repayment plan, usually monthly/quarterly, will be set for you by our experts 
                        (with your understanding and permission), at a rate your current finances can handle without you having to worry about 
                        missing a payment. Your monthly/quarterly payment will depend on the amount of the loan, interest rate, and term of the loan. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div> 
    )
}

export default Faqs;