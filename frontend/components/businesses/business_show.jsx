import React from 'react';
import NavBarContainer from '../../components/nav_bar/nav_bar_container';
import BusinessMap from '../map/business_map';

export default class BusinessShow extends React.Component {
  
  
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  // componentDidUpdate() {
  //   this.props.fetchBusiness(this.props.match.params.businessId)
  // }

  render() {
    let {business} = this.props;
   
   
    if (business !== undefined ) {
      
      let price = "";
      if (business.priceRange === 'Inexpensive') price = "$";
      if (business.priceRange === 'Moderate') price = "$$";
      if (business.priceRange === 'Pricey') price = "$$$";
      if (business.priceRange === 'Ultra High-End') price = "$$$$";
      let weekArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      
     
      return (
        <div>
  
          
          <div>
            <NavBarContainer />
            <div className="business-show-main">

              <div className="business-show-title">
                <h1>{business.name}</h1>
                <p>*****</p>
                <p>{`${price} - ${business.category} ${business.subCategory ? `, ${business.subCategory}` : ""}`}</p>
              </div>

              <div className="business-show-hours">
                <h3>Location &amp; hours</h3>
                
                <div>

                  <div className="business-show-map">
                    <BusinessMap business={business} />
                  </div>
                  
                  <table>
                    {weekArr.map((day, idx) => (
                      <tbody>
                        <tr key={idx}>
                          <td>{day}</td>
                          <td>{business.hours}</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                 
                </div>
              </div>
              <div className="business-show-knowns">
                <h3>Known For</h3>
                <div><span></span></div>
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