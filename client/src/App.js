import './App.css';
import React, { useState, createContext, useContext } from 'react';

const ClassesContext = createContext();
import { Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Signup from './components/SignUp';
import Login from './components/LogIn';
import Home from './components/Home';
import Reservation from './components/Reservation';
import SubComp from './components/Class';

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

export default App;
