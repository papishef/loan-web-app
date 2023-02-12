import React from "react";
import appCss from "./index.module.css"
import Landing from "./scenes/Openscenes/Landing/Landing";
import About from "../src/scenes/Openscenes/About/About";
import Login from "../src/scenes/Openscenes/Login/Login"
import Categories from "../src/scenes/Openscenes/Categories/Categories"
import Faqs from "../src/scenes/Openscenes/Faqs/Faqs"
import Register from "./scenes/Openscenes/Register/Register";
import LoanCalculator from "./scenes/Openscenes/LoanCalculator/LoanCalculator";
import Terms from "./scenes/Openscenes/Terms/Terms";
import Contact from "./scenes/Openscenes/Contact/Contact";
import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from "./scenes/Adminscenes/Dashboard/Dashboard";

function App() {
  const currentUser = true
  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login" />
  }
  return (
    <div className={appCss.app}>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/categories'} element={<Categories />} />
        <Route path={'/loan-calc'} element={<LoanCalculator />} />
        <Route path={'/faqs'} element={<Faqs />} />
        <Route path={'/terms'} element={<Terms />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/dashboard'} element={<RequireAuth><Dashboard /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
