import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  getDateFromString(dateString){
    if (dateString) {
      return dateString.split(" ")[0].split("-")
    } else return dateString;
  }

  addTemp(day) {
    return Math.round(day.temp).toString() + this.props.metric
  }

  addTempRange(day) {
    if (day.temp_min !== day.temp_max) return Math.round(day.temp_min) + " / " + Math.round(day.temp_max) + " " + this.props.metric
  }

  render() {
    const info = this.props.currentDay;
    let date, time, temp, tempRange;
    if (info.dt_txt) {
      date = this.getDateFromString(info.dt_txt)
      time = info.dt_txt.split(" ")[1]
    }
    if (info.main) {
      temp = this.addTemp(info.main);
      tempRange = this.addTempRange(info.main)
    }
    return (
      <div className="current">
        <div
          className="current-time"
          id="date">
            {this.props.buildDateString(date, this.props.monthNames)}
        </div>
        
        <div className="current-time" id="time">{time}</div>
        <div className="weather">
          <div id="temp">{temp}</div>
          <div id="weather-icon"></div>
        </div>
        <div className="min-max">
          <div id="temp-range">{tempRange}</div>
        </div>
      </div>
    )
  }
}

export default Display;