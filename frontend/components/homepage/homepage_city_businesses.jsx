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

  render() {
    
    let businesses = this.generateBusinesses();
    if (!businesses) return null;
    let biz1 = businesses[0];
    let biz2 =  businesses[1];
    let biz3 =businesses[2];
  
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