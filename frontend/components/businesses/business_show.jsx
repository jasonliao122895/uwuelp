import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import BusinessMap from '../map/business_map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking, faBox, faVolumeUp, faCreditCard, faUtensils, faWifi, faLaptop, faPhone, faLocationArrow, faStar, faFemale, faMale } from '@fortawesome/free-solid-svg-icons';
import ImageSlide from './img_slide';
import ReviewIndexContainer from '../reviews/review_index_container';
import { Link } from 'react-router-dom';
import Loader from './loader';

export default class BusinessShow extends React.Component {
  

  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
    if (this.props.currentUser) {
      this.props.fetchUser(this.props.currentUser.id);
    }
    // debugger
  }

  componentDidUpdate(prevProps) {
    
    if (this.props.numReviews !== prevProps.numReviews && this.props.currentUser) {
      this.props.fetchUser(this.props.currentUser.id)
    }

    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.fetchBusiness(this.props.match.params.businessId)
    }


  }

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
    if (this.props.loading) return (<div><Loader /></div>)
    
    if (business !== undefined ) {
      
      let price = "";
      if (business.priceRange === 'Inexpensive') price = "$";
      if (business.priceRange === 'Moderate') price = "$$";
      if (business.priceRange === 'Pricey') price = "$$$";
      if (business.priceRange === 'Ultra High-End') price = "$$$$";
      let weekArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      let rating = business.avgRating;
      let ratingUrl;
      if (rating < 1.5) ratingUrl = window.one;
      if (rating < 2.0 && rating >= 1.5) ratingUrl = window.oneHalf;
      if (rating < 2.5 && rating >= 2.0) ratingUrl = window.two;
      if (rating < 3 && rating >= 2.5) ratingUrl = window.twoHalf;
      if (rating < 3.5 && rating >= 3.0) ratingUrl = window.three;
      if (rating < 4 && rating >= 3.5) ratingUrl = window.threeHalf;
      if (rating < 4.5 && rating >= 4.0) ratingUrl = window.four;
      if (rating < 5 && rating >= 4.5) ratingUrl = window.fourHalf;
      if (rating === 5) ratingUrl = window.five;
    
      let reviewLength;
      
      if (business.reviews) reviewLength = business.reviews.length;
      
      return (
        <div >
  
          
          <div className="business-show-page">

            <div className="nav-and-carousel">
            <NavBar />
           

            <ImageSlide photos={business.photosUrls}/>

            </div>

          
            <div className="show-page-center">
            
              <div className="business-show-main">

                <div className="business-show-div">
                  <h1>{business.name}</h1>
                  <div className="show-rating-container">
                    {rating > 0 ?
                      <img id="show-avg-rating" src={ratingUrl} alt="" />

                      : <p>No Rating</p>}
                    <span>{`${reviewLength} Reviews`}</span> 
                  </div>
                  <p>{`${price} • ${business.category} ${business.subCategory ? `, ${business.subCategory}` : ""}`}</p>
                  <Link to={`/businesses/${business.id}/reviews`}>
                    <button>
                      <span><FontAwesomeIcon icon={faStar}/></span>
                      Write a Review               
                    </button>
                  </Link>
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

                    <a id="more-attribute" onClick={this.handleToggle}>2 More Attributes</a>

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

                    <a id="show-less"  onClick={this.handleToggle} className="hide">Show Less</a>
                  </div>


                </div>
                <div className="business-show-div">
                    <h3>About the Business</h3>
                    <p>{business.description}</p>
                </div>
                <div className="business-show-reviews">
                  <h3>Recommended Reviews</h3>
                  <div className="currentUser-review-container">
                    <div className="currentUser-info">
                      {this.props.currentUser ? 
                        <img src={this.props.currentUser.profPic} alt="" />
                        : <img src="https://patriotpower.ogsd.net/wp-content/uploads/2018/03/Profile_Kirby.aead314d435d8e52d9a4e92a6f799c4eee08081e.jpg" alt=""/>
                      }
                      
                      <div>
                        {this.props.currentUser ? 
                          <h4>{`${this.props.currentUser.firstName}  ${this.props.currentUser.lastName}.`}</h4>
                          : <h4>Guest</h4> }
                        {this.props.currentUser ? 
                          <p>{`${this.props.currentUser.city}, ${this.props.currentUser.state}`}</p> : ""
                        }
                        <p>
                          <span><FontAwesomeIcon id="current-user-star" icon={faStar}/></span>
                          {(this.props.currentUser && this.props.currentUser.numReviews) ? `${this.props.currentUser.numReviews} Reviews` : "0 Reviews" }
                        </p>
                        <p>
                          <span><FontAwesomeIcon id="current-user-friend" icon={faFemale} /></span>
                          <span><FontAwesomeIcon id="current-user-friend2" icon={faMale} /></span>
                          {this.props.currentUser ? `${this.props.currentUser.friends.length} ` : "N/A" } {this.props.currentUser.friends.length < 2 ? 'Friend' : 'Friends'}
                        </p>
                      </div>
                    </div> 
                    <div className="review-form-link">
                      <Link to={`/businesses/${business.id}/reviews`}>{`Start your review for ${business.name}`}</Link>
                    </div>      
                  </div>
                    <ReviewIndexContainer currentUser={this.props.currentUser} business={business}/>
                </div>
              </div>



              <div className="show-website-container">


                <div className="business-show-website">
                  <div className="business-show-website-div">
                    <span><FontAwesomeIcon className="info-icon" icon={faLaptop} /></span>
                    <a href={business.website} target="_blank">Website</a>
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