import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class RecentActivity extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.review.business_id.toString())
  }



  render() {
    
    if (!this.props.business) return null;
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
          <Link to={`/businesses/${this.props.business.id}`}>
            <img src={this.props.business.profPic} alt=""/>
          </Link>

          <div className="recent-activity-info">
              <Link to={`/businesses/${this.props.business.id}`}>
              {this.props.business.name}
            </Link>
            <p>{this.props.business.category}{this.props.business.subCategory ? `, ${this.props.business.subCategory}` : "" }</p>
            <p>{this.props.business.address}</p>
            <p>{`${this.props.business.city}, ${this.props.business.state} ${this.props.business.zipcode}`}</p>
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

export default withRouter(RecentActivity);

