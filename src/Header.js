import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const city = this.props.location
    return (
      <div className="location-box">
        <div id="location">{city.name}, {city.country}</div>
      </div>
    )
  }
}

export default Header;