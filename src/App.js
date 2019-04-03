import React, { Component } from 'react';
import config from './config';
import './App.css';
import callHelloCammis from './actions/buttonHandler';

class App extends Component {
  state = {
    message: 'Welcome!'
  }

  render() {
    let buttonClick = () => {
      callHelloCammis(config.helloCammisURL)
      .then(res => {
        const myMessage = res.data['message:'];
        this.setState({message: myMessage});
      });
    };

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello-CAMMIS-UI
          </p>
          <h1>
            {this.state.message}
          </h1>  
          <p>
          <button onClick={buttonClick}>Click to Call Hello-Cammis</button>
          </p>
        </header>
      </div>
    );
  }
}



export default App;
