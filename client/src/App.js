import './App.css';
import React, { useState, createContext, useContext } from 'react';

const ClassesContext = createContext();
import { Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Signup from './components/SignUp';
import Login from './components/LogIn';
import Home from './components/Home';
import Reservation from './components/Reservation';

const App = () => {
  const [classes, setClasses] = useState();
  // console.log(classes);

  return (
    <div className='App'>
      <h1>Fitness App</h1>
      <ClassesContext.Provider value={[classes, setClasses]}>
        <SubComp classes={classes} setClasses={setClasses} />
      </ClassesContext.Provider>

      <Home />
      {/* <SubComp classes={classes} setClasses={setClasses} /> */}
      <Switch>
        <PrivateRoute exact path="/reservation" component={Reservation} />
        <PrivateRoute exact path="/classes" component={SubComp} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
      </Switch>
      
    </div>
  )
}

const SubComp = () => {
  const { classes, setClasses } = useContext(ClassesContext);

  return (
    <div className='Sub-Component'>
      <h2>Classes</h2>
      <SubComp2 />
      <br />
      <SubComp3 classes={classes} setClasses={setClasses} />
      <Reservation />
    </div>
  )
}

const SubComp2 = () => {
  const [ classes, setClasses ] = useContext(ClassesContext);

  const addClass = () => {
    setClasses({
      ...classes,
        time: '',
        date: '',
        duration: '',
        type: '',
        intensity: '',
        location: ''
    })
  }

  return (
    <div className='Sub-Component2'>
      <h4>Class time: </h4>
      <h4>Date: </h4>
      <h4>Duration: </h4>
      <h4>Class type: </h4>
      <h4>Intensity: </h4>
      <h4>Location: </h4>
      <button onClick={addClass}>Add Class</button>
    </div>
  )
}

const SubComp3 = () => {
  // const { classes } = useContext(ClassesContext);

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
      <button>Create Punch Pass</button>
      <br />
      <button>Process Payment</button>
      <br /><br />
    </div>
  )
}

export default App;
