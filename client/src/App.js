import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      client: [
        {
          time: '',
          date: '',
          duration: '',
          type: '',
          intensity: '',
          location: ''
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Fitness App</h1>
        <ClassList client={this.state.client} />
      </div>
    )
  }
}

export default App;
