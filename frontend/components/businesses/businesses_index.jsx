import React from 'react';
import BusinessIndexItem from './business_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';
import BenchMap from '../map/business_map';


export default class BusinessIndex extends React.Component {
  
  
  componentDidMount() {
    let bounds = "show all"
    this.props.updateBounds("bounds", bounds);
  }

  render() {
    let numbers = []
    let businesses = this.props.businesses.map((business, idx) => {
      numbers.push(idx + 1);
      return (
        <BusinessIndexItem key={business.id} business={business}/>
      )
    })
    
    return (
      <div>
        <NavBarContainer />
        <div className="business-index-main-flex">
          <div className="business-index-main">
            <ol>
              {businesses}
            </ol>
            <div className="map-div">
              <BenchMap 
                businesses={Object.values(this.props.businesses)}
                updateBounds={this.props.updateBounds}
                numbers={numbers}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}