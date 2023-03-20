import React from "react";
import Header from "./components/Head/Header";
import Home from "./components/Hero/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import "./App.css"
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App 


