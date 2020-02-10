import React from 'react';
import './Future.css';

class FutureForecasts extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      forecasts: []
    }
  }
  
  render() {
    const firstRow = [], secondRow = [];
    let futureId, day, element;
    if (this.props) {
      let increment = this.props.list.length / this.props.days;

      for (let i = increment, j = 2; i < this.props.list.length; i += increment) {
        futureId = `day-${j}`
        element = this.props.list[i]

        if (element) {
          day = (
            <div id={futureId} className="next-day" key={j}>
              { 
                this.props.buildDateString(
                  this.props.buildDateArray(element.dt_txt, this.props.monthNames)
                ) 
              }
              { this.props.addTemp(element, this.props.metric) }
            </div>
          )
          j % 2 === 0 ? firstRow.push(day) : secondRow.push(day)
          j++;
        }
      }
    }

    return (
      <div id="future">
        <div id="first-row" className="row">
          { firstRow }
        </div>
        <div id="second-row" className="row">
          { secondRow }
        </div>
      </div>
    )
  }
}

export default FutureForecasts;