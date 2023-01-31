import React from 'react';

import './App.css';
import Header from "./Components/Header";
import Onboarding from './Components/Onboarding/Index';
import Foryou from "./Components/For You/Index";


function App() {
  return (
    <>
      <Header />
      <Onboarding />
      <Foryou/>
    </>
  )
}

export default App;
