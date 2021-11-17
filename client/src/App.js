import './App.css';
import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Signup from './components/SignUp';
import Login from './components/LogIn';
import Home from './components/Home';
import Reservation from './components/Reservation';

const App = () => {
  const [classes, setClasses] = useState();
  // console.log(classes);
  const pic = "https://www.multivu.com/players/English/7942951-anytime-fitness-every-step-counts/image/anytime-fitness-get-to-a-healthier-place-16-HR.jpg";

  return(
    <div className='App'>
      <Home />
      <img src={pic} alt="Anytime Fitness" />
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

const SubComp = (props) => {
  return(
    <div className='Sub-Component'>
      <h2>Classes</h2>
      <SubComp2 />
      <Reservation />
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
