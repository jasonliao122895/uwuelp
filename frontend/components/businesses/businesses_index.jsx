import React from 'react';
import BusinessIndexItem from './business_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';

export default class BusinessIndex extends React.Component {
  
  
  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    let businesses = this.props.businesses.map(business => {
      return (
        <BusinessIndexItem key={business.id} business={business}/>
      )
    })
    
    return (
      <div>
        <NavBarContainer />
        <div className="business-index-main">
          <ol>
            {businesses}
          </ol>
        </div>
      </div>
    )
  }
}