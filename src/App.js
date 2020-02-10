import React from 'react';
import './App.css';

import Header from './Header/Header'
import Display from './Display/Display'
import FutureForecasts from './Future/Future'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      forecast: null,
      days: 5,
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December" 
      ]
    }
  } 

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Berlin&units=metric&mode=json&APPID=${process.env.REACT_APP_ID}`)

      if (res.status >= 400)
        throw new Error("something went wrong")

      const response = await res.json();

      console.log(response)

      this.setState({
        forecast: response
      })
    } catch (err) {
      console.log("API error: ", err)
    }
  }

  buildDateArray(dateString){
    if (dateString) {
      return dateString.split(" ")[0].split("-")
    }
  }
  
  buildDateString(dateArray, monthNames){
    if (dateArray && monthNames) {
      return dateArray[2] + " " + monthNames[parseInt(dateArray[1])-1] + ", " + dateArray[0]
    }
  }

  addTemp(day, metric) {
    return Math.round(day.main.temp).toString() + metric
  }

  render() {
    let header, current, future;
    if (this.state.forecast) {
      header = <Header location={this.state.forecast.city}/>
      current = (
        <Display
          metric="°C"
          monthNames={this.state.monthNames}
          currentDay={this.state.forecast.list[0]}
          buildDateString={this.buildDateString}
        />
      )
      future = (
        <FutureForecasts
          metric="°C"
          monthNames={this.state.monthNames}
          list={this.state.forecast.list}
          days={this.state.days}
          buildDateArray={this.buildDateArray}
          buildDateString={this.buildDateString}
          addTemp={this.addTemp}
        />
      )
    }
    return (
      <div className="App">
        { header }
        { current }
        { future }
        <span className="spinner"></span>
        <div className="api-error">
          <div id="error-icon"></div>
          <span></span>
        </div>
      </div>
    );
  }
}

export default App;
