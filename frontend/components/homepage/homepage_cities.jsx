import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class HomepageCities extends React.Component {
  render() {

    let city = 'San Francisco'

    return (
      <div className="homepage-cities" >
        <h2>{`Find the best businesses in ${city}`} </h2>
        <div className="homepage-cities-tabs">
          <Link to={'/?location=sf'}>
            <span>San Francisco</span>
          </Link>
          <Link to={'/?location=sd'}>
            <span>San Diego</span>
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(HomepageCities);