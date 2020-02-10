import React from 'react';

import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const location = this.props.location
    const cityname = location ? `${location.name}, ${location.country}` : '' 
    return (
      <div className="location-box">
        <div id="location">{ cityname }</div>
      </div>
    )
  }
}

export default Header;