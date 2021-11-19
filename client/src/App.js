import './App.css';
import React, { createContext, useContext, useReducer } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Signup from './components/SignUp';
import Login from './components/LogIn';
import Home from './components/Home';
import Reservation from './components/Reservation';
import SubComp from './components/Class';

import { initialState, reducer } from './reducer/classReducer';
import { ClassesContext } from './components/Class';

const App = () => {
  const [classes, dispatch] = useReducer(reducer, initialState);
  console.log(classes);
  const pic = "https://www.multivu.com/players/English/7942951-anytime-fitness-every-step-counts/image/anytime-fitness-get-to-a-healthier-place-16-HR.jpg";

  return (
    <div className='App'>

      <Home />
      <img src={pic} alt="Anytime Fitness" />
      {/* <SubComp classes={classes} setClasses={setClasses} /> */}
      <Switch>
        <PrivateRoute exact path="/reservation" component={Reservation} />
        <PrivateRoute exact path="/classes" component={SubComp} />
        <ClassesContext.Provider value={[classes, dispatch]}>
          <SubComp />
        </ClassesContext.Provider>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Login} />
      </Switch>

    </div>
  )
}

export default App;
