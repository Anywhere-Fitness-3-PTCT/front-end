import './App.css';
import React, { useState, createContext, useContext } from 'react';

const ClassesContext = createContext();

const App = () => {
  const [classes, setClasses] = useState();
  // console.log(classes);

  return (
    <div className='App'>
      <h1>Fitness App</h1>
      <ClassesContext.Provider value={[classes, setClasses]}>
        <SubComp classes={classes} setClasses={setClasses} />
      </ClassesContext.Provider>

    </div>
  )
}

const SubComp = (props) => {
  const [classes] = useContext(ClassesContext);

  return (
    <div className='Sub-Component'>
      <h2>Classes</h2>
      <SubComp2 />
      <button>Add Class</button>
      <br />
      <SubComp3 classes={classes} setClasses={setClasses} />
    </div>
  )
}

const SubComp2 = (props) => {
  const [classes] = useContext(ClassesContext);

  return (
    <div className='Sub-Component2'>
      <h4>Class time: </h4>
      <h4>Date: </h4>
      <h4>Duration: </h4>
      <h4>Class type: </h4>
      <h4>Intensity: </h4>
      <h4>Location: </h4>
    </div>
  )
}

const SubComp3 = (props) => {
  const [classes] = useContext(ClassesContext);

  return (
    <div className='Sub-Component2'>
      <h4>Name: </h4>
      <h4>Type: </h4>
      <h4>Start Time: </h4>
      <h4>Duration: </h4>
      <h4>Intensity Level: </h4>
      <h4>Location: </h4>
      <h4>Current Attendies: </h4>
      <h4>Max Class Size: </h4>
    </div>
  )
}

export default App;
