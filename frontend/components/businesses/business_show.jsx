import React from 'react';
import NavBarContainer from '../../components/nav_bar/nav_bar_container';

export default class BusinessShow extends React.Component {
  
  
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  render() {
    let {business} = this.props;
    if (business.hours !== undefined) {
      debugger;
      return (
        <div>
  
          <h1>Pls Work</h1>
          <div>
            <NavBarContainer />
            <div className="business-show-main">
              <div className="business-show-title">
                <h1>{business.name}</h1>
                <p>*****</p>
                <p>{`${business.priceRange} - ${business.category} ${business.subCategory ? `, ${business.subCategory}` : ""}`}</p>
              </div>
              <div className="business-show-hours">
                <h3>Location &amp; hours</h3>
                <div>
                  <div className="business-show-map">
  
                  </div>
                  <div>
                    
                  </div>
                </div>
              </div>
              <div className="business-show-knowns">
  
              </div>
              <div className="business-show-description">
  
              </div>
              <div className="business-show-reviews">
  
              </div>
            </div>
          </div>
  
        </div>
      )

    } else {
      return (
        <div>
        </div>
      )
    }
    
  }
}