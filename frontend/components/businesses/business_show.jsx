import React from 'react';
import NavBarContainer from '../../components/nav_bar/nav_bar_container';
import BusinessMap from '../map/business_map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking, faBox, faVolumeUp, faCreditCard, faUtensils, faWifi, faLaptop, faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export default class BusinessShow extends React.Component {
  
  
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  // componentDidUpdate() {
  //   this.props.fetchBusiness(this.props.match.params.businessId)
  // }

  handleToggle(e) {
    e.preventDefault();
    let kf1 = document.getElementById('kf-1');
    let kf2 = document.getElementById('kf-2');
    let moreAtt = document.getElementById('more-attribute');
    let showLess = document.getElementById('show-less');
    kf1.classList.toggle('hide');
    kf2.classList.toggle('hide');
    moreAtt.classList.toggle('hide');
    showLess.classList.toggle('hide');
  }

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
        <div >
  
          
          <div className="business-show-page">
            <NavBarContainer />
            <div className="show-page-center">
            
              <div className="business-show-main">

                <div className="business-show-div">
                  <h1>{business.name}</h1>
                  <p>*****</p>
                  <p>{`${price} - ${business.category} ${business.subCategory ? `, ${business.subCategory}` : ""}`}</p>
                </div>

                <div className="business-show-div">
                  <h3>Location &amp; hours</h3>
                  
                  <div className="business-show-map-and-hours">

                    <div className="business-show-map">
                      <BusinessMap business={business} />
                    </div>
                    
                    <div className="business-table-hours">
                      <table>
                        {weekArr.map((day, idx) => (
                          <tbody key={idx}>
                            <tr>
                              <td>{day}</td>
                              <td>{business.hours}</td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                  
                  </div>
                </div>
                <div className="business-show-div">

                  <div className="business-show-knowns">
                    <h3>Known For</h3>

                    <div>
                      <div>
                        <span><FontAwesomeIcon className="kf-icon"icon={faParking}/></span>
                        <span>Parking</span>
                        <span id="kf-span1">{`  ${business.parking}`}</span>
                      </div>
                    </div>

                    <div>
                      <div>
                        <span><FontAwesomeIcon className="kf-icon" icon={faBox} /></span>
                        <span>Takeout</span>
                        <span id="kf-span2">{`  ${business.takeout}`}</span>
                      </div>
                    </div>

                    <div>
                      
                      <div>
                        <span><FontAwesomeIcon className="kf-icon" icon={faVolumeUp} /></span>
                        <span>Noise Level</span>
                        <span id="kf-span3">{`  ${business.noiseLevel}`}</span>
                      </div>
                    </div>

                    <div>
                      <div>
                        <span><FontAwesomeIcon className="kf-icon" icon={faCreditCard} /></span>
                        <span>Accept Card</span>
                        <span id="kf-span4">{`  ${business.acceptCard}`}</span>
                      </div>
                    </div>

                    <div  id="hidden-kf">
                      <div id="kf-div-1">
                        <div id="kf-1" className="hide">
                          <span><FontAwesomeIcon className="kf-icon" icon={faUtensils} /></span>
                          <span>Cater</span>
                          <span id="kf-span5">{`  ${business.cater}`}</span>
                        </div>
                      </div>

                      <div id="kf-div-2"> 
                        <div id="kf-2" className="hide">
                          <span><FontAwesomeIcon className="kf-icon" icon={faWifi} /></span>
                          <span>Wifi</span>
                          <span id="kf-span6">{`  ${business.wifi}`}</span>
                        </div>
                      </div>
                    </div>    

                    <a id="more-attribute" onClick={this.handleToggle}>2 More Attributes</a>
                    <a id="show-less"  onClick={this.handleToggle} className="hide">Show Less</a>
                  </div>


                </div>
                <div className="business-show-div">
                    <h3>About the Business</h3>
                    <p>{business.description}</p>
                </div>
                <div className="business-show-reviews">
    
                </div>
              </div>

            </div>

            <div className="business-show-website">
              <div className="business-show-website-div">
                <span><FontAwesomeIcon className="info-icon" icon={faLaptop} /></span>
                <a href={business.website}>Website</a>
              </div>

              <div className="business-show-website-div">
                <span><FontAwesomeIcon className="info-icon" icon={faPhone} /></span>
                <span id="span-show">{business.phone}</span>
              </div>

              <div className="business-show-website-addy">
            
              
                  <span><FontAwesomeIcon className="info-icon" icon={faLocationArrow} /></span>
                <div>
                  <p>{business.address}</p>
                  <p>{`${business.city} ,${business.state} ${business.zipcode}`}</p>

                </div>
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