import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
    <div>
        <h1>Fitness App</h1>
      <button><Link to="signup">Sign Up</Link></button>
      <button><Link to="login">Login</Link></button>
    </div>
    );
}

export default Home;