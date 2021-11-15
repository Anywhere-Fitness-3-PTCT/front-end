import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [classes, setClasses] = useState();
  // console.log(classes);

  return(
    <div className='App'>
      <h1>Fitness App</h1>
      <button>Sign Up</button>
      <button>Login</button>
      <SubComp classes={classes} setClasses={setClasses} />
      
    </div>
  )
}

const SubComp = (props) => {
  return(
    <div className='Sub-Component'>
      <h2>Classes</h2>
      <SubComp2 />
    </div>
  )
}

const SubComp2 = () => {
  return(
    <div className='Sub-Compoonent2'>
      <h4>Class time: </h4>
      <h4>Date: </h4>
      <h4>Duration: </h4>
      <h4>Class type: </h4>
      <h4>Intensity: </h4>
      <h4>Location: </h4>
    </div>
  )
}

export default App;
