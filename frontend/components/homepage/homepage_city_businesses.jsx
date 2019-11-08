import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class HomepageCityBusinesses extends React.Component {

  componentDidMount() {
    this.fetchBusinesses()
  }

  fetchBusinesses() {
    let search = this.props.location.search.split('=')[1];

    if (!search) {
      search = "San Francisco"
    } else if (search === "sf") {
      search = "San Francisco"
    } else if (search === "sd") {
      search = "San Diego"
    }

    this.props.getHomepageBusinesses(search)
  }

  componentDidUpdate(prevProp) {
    if (this.props.location.search !== prevProp.location.search) {
      this.fetchBusinesses()
    }
  }

  generateBusinesses() {
    let arr = [];

    if (this.props.businesses.length > 0) {
      while (arr.length < 3) {
        let randIdx = Math.floor(Math.random() * Math.floor(this.props.businesses.length))
        let business = this.props.businesses[randIdx]
        if (!arr.includes(business)) arr.push(business);
      }
      return arr;
    }
  }

  generateRatingUrl(business) {
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
    return ratingUrl;
  }

  render() {
    
    let businesses = this.generateBusinesses();
    if (!businesses) return null;
    let biz1 = businesses[0];
    let biz2 = businesses[1];
    let biz3 = businesses[2];
    let rating1 = this.generateRatingUrl(biz1)
    let rating2 = this.generateRatingUrl(biz2)
    let rating3 = this.generateRatingUrl(biz3)
    
  
    return (
      <div className="homepage-city-businesses">
        <h3>Hot Businesses</h3>
        <div className="homepage-businesses-container">

          <div className="homepage-businesses-item">
            <Link to={`/businesses/${biz1.id}`}>
              <img src={biz1.profPic} alt=""/>
            </Link>
            <div className="homepage-business-info">
              <Link to={`/businesses/${biz1.id}`}>{biz1.name}</Link>
              <div className="homepage-rating">
                <img src={rating1} alt=""/>
                <span>{`${biz1.numReviews} `}{biz1.numReviews < 2 ? "Review" : "Reviews"}</span>
              </div>
              <p>{biz1.category}{biz1.subCategory? `, ${biz1.subCategory}` : ""}</p>
              <p>{biz1.city}</p>
            </div>
          </div>

          <div className="homepage-businesses-item">
            <Link to={`/businesses/${biz2.id}`}>
              <img src={biz2.profPic} alt="" />
            </Link>
            <div className="homepage-business-info">
              <Link to={`/businesses/${biz2.id}`}>{biz2.name}</Link>
              <div className="homepage-rating">
                <img src={rating2} alt="" />
                <span>{`${biz2.numReviews} `}{biz2.numReviews < 2 ? "Review" : "Reviews"}</span>
              </div>
              <p>{biz2.category}{biz2.subCategory ? `, ${biz2.subCategory}` : ""}</p>
              <p>{biz2.city}</p>
            </div>
          </div>

          <div className="homepage-businesses-item">
            <Link to={`/businesses/${biz3.id}`}>
              <img src={biz3.profPic} alt="" />
            </Link>
            <div className="homepage-business-info">
              <Link to={`/businesses/${biz3.id}`}>{biz3.name}</Link>
              <div className="homepage-rating">
                <img src={rating3} alt="" />
                <span>{`${biz3.numReviews} `}{biz3.numReviews < 2 ? "Review" : "Reviews"}</span>
              </div>
              <p>{biz3.category}{biz3.subCategory ? `, ${biz3.subCategory}` : ""}</p>
              <p>{biz3.city}</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(HomepageCityBusinesses);