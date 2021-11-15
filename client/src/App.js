import './App.css';
import React, { useState } from 'react';

const App = () => {
  

  return(
    <div className='App'>
      <h1>Fitness App</h1>
      <SubComp />
    </div>
  )
}

const SubComp = () => {
  return(
    <div className='Sub-Component'>
      <h2>Classes</h2>
    </div>
  )
}

export default App;
