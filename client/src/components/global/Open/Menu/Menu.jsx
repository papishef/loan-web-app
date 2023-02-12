import React, { useState } from 'react';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from 'hamburger-react'
import menuCss from "./Menu.module.css"
import logoImg from "../../../../shots/Asset 14mp.png"
import Translate from '../../../UI/Translate/Translate';

const screenWidth = window.innerWidth

/* FOR LARGER SCREENS */
const MenuBarLarge = () => {

    return (

        <Box sx={{marginBottom: '5rem'}}>

            <Box className={menuCss.BigMenu}>
                <Box>
                    <Link to={'/'}>
                        <img src={logoImg} alt='LOGO' className={menuCss.Logo} />
                    </Link>
                </Box>

                <Box>
                    <Box display="flex">
                        <Link to={'/about'} className={menuCss.ListItem}>
                            <Box>About</Box>
                        </Link>
                        <Link to={'/loan-calc'} className={menuCss.ListItem}>
                            <Box>Loan Calculator</Box>
                        </Link>
                        <Link to={'/contact'} className={menuCss.ListItem}>
                            <Box>Contact Us</Box>
                        </Link>
                        <Link to={'/login'} className={menuCss.Login}>
                            <Box>User Login</Box>
                        </Link>
                    </Box>
                </Box>
                
                <Translate />
           
            </Box>


        </Box>

    )
}

/* FOR SMALLER SCREENS */
const MenuBarSmall = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <Box sx={{marginBottom: '5rem'}}>

            <Box className={menuCss.SmallMenu}>
                <Box>
                    <Link to={'/'}>
                        <img src={logoImg} alt='LOGO' className={menuCss.Logo} />
                    </Link>
                </Box>

                <Translate />
                

                {/* HAMBURGER MENU BUTTON  */}
                <Hamburger 
                    color="#4B4B87" 
                    rounded 
                    size={40} 
                    distance="md"
                    onToggle={toggled => {
                        if (toggled) {
                            setMenuOpen(true)
                        } else {
                            setMenuOpen(false)
                        }
                    }}
                />
            </Box>

            {/* MENU BLOCK */}
            <Box className={menuOpen ? menuCss.SmallMenuBlock : menuCss.SmallMenuNoDisplay}>
                <Link to={'/about'} className={menuCss.ListItemSmall}>
                    <Box>About MP Capital</Box>
                </Link>
                <Link to={'/categories'} className={menuCss.ListItemSmall}>
                    <Box>Loan Categories</Box>
                </Link>
                <Link to={'/loan-calc'} className={menuCss.ListItemSmall}>
                    <Box>Loan Calculator</Box>
                </Link>
                <Link to={'/contact'} className={menuCss.ListItemSmall}>
                    <Box>Contact Us</Box>
                </Link>
                <Link to={'/faqs'} className={menuCss.ListItemSmall}>
                    <Box>FAQs</Box>
                </Link>
                <Link to={'/login'} className={menuCss.Login}>
                    <Box>User Login</Box>
                </Link>
                
            </Box>

        </Box>

    )
}

const MenuBar = () => {
    if (screenWidth > 900) {
        return <MenuBarLarge />
    }
    return <MenuBarSmall />
}

export default MenuBar;

