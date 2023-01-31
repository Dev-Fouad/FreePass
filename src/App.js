import React from 'react';

import './App.css';
import Header from "./Components/Header";
import Onboarding from './Components/Onboarding/Index';
import Features from "./Components/Features/Index"
import Business from "./Components/Business/Index";


function App() {
  return (
    <>
      <Header />
      <Onboarding />
      <Features />
      <Business />
    </>
  )
}

export default App;
