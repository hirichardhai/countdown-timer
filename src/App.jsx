import React, { Component } from 'react';

class App extends Component {
  render() {
    return (    
      <div className="App">
        <div className="App-title">
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeHolder="new date" />
          <button>Submit</button>
        </div>
        </div>
      </div>
    )
  }
}

export default App;