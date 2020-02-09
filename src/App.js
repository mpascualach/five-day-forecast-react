import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      forecast: null
    }
  } 

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Berlin&units=metric&mode=json&APPID=${process.env.REACT_APP_ID}`)

      if (res.status >= 400)
        throw new Error("something went wrong")

      const response = await res.json();

      this.setState({
        forecast: response
      })
    } catch (err) {
      console.log("API error: ", err)
    }
  }

  render() {
    return (
      <div className="App">
        <span className="spinner"></span>
      </div>
    );
  }
}

export default App;
