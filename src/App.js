import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import React, {useState} from "react";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import {sliderData} from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import {InfoData} from "./data/InfoData";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <GlobalStyle/>
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Hero slides={sliderData}/>
            <InfoSection {...InfoData}/>
        </>
    );
}

export default App;
