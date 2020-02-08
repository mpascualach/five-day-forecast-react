import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Display from './Display'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      location: {},
      displayInfo: {}
    }
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      //yes
    } else {

    }

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Berlin&units=metric&mode=json&APPID=${process.env.REACT_APP_ID}`)
      .then(response => response.json())
      .then(res => {
        console.log("Reponse: ", res)
        this.setState({
          location: res.city,
          displayInfo: res.list[0]
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header location={this.state.location}/>
        <Display
          displayInfo={this.state.displayInfo}
          metric="°C"/>
      </div>
    );
  }
}

export default App;
