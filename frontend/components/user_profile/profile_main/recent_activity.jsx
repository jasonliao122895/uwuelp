import React from 'react';
import { Link } from 'react-router-dom';

export default class RecentActivity extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.review.business_id.toString())
  }



  render() {
    
    if (this.props.business && this.props.business.length < 1) return null;
    let business = this.props.business[0];
    let {review} = this.props
    let date = new Date(this.props.review.created_at).toLocaleDateString()
    let reviewUrl;
    if (review.rating === 1) reviewUrl = window.one
    if (review.rating === 2) reviewUrl = window.two
    if (review.rating === 3) reviewUrl = window.three
    if (review.rating === 4) reviewUrl = window.four
    if (review.rating === 5) reviewUrl = window.five
    
    return (
      <div className="recent-activity-item">

        <div className="recent-activity-info-container">
          <Link to={`/businesses/${business.id}`}>
            <img src={business.profPic} alt=""/>
          </Link>

          <div className="recent-activity-info">
              <Link to={`/businesses/${business.id}`}>
              {business.name}
            </Link>
            <p>{business.category}{business.subCategory ? `, ${business.subCategory}` : "" }</p>
            <p>{business.address}</p>
            <p>{`${business.city}, ${business.state} ${business.zipcode}`}</p>
          </div>
        </div>

        <div className="recent-activity-rating">
          <img src={reviewUrl} alt=""/>
          <span>{date}</span>
        </div>

        <p>{this.props.review.body}</p>
      </div>
    )
  }
}