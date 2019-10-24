import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

export default class ProfileReviewIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.review.business_id);
  }

  highlightButton(e) {
    if (e.currentTarget.firstElementChild) {
      e.currentTarget.firstElementChild.style.color = 'black';
    }
  }

  unhighlightButton(e) {
    if (e.currentTarget.firstElementChild) {
      e.currentTarget.firstElementChild.style.color = '';
    }
  }

  handleDelete(e) {
    e.preventDefault();
    let that = this;
    this.props.deleteReview(this.props.review)
      .then( () => {
        that.props.fetchUser(that.props.currentUser.id)
      })
  }

  render() {
    let { review } = this.props;
    let date = new Date(this.props.review.created_at).toLocaleDateString()
    let business = this.props.business[this.props.review.business_id]
    let reviewUrl;
    if (review.rating === 1) reviewUrl = window.one
    if (review.rating === 2) reviewUrl = window.two
    if (review.rating === 3) reviewUrl = window.three
    if (review.rating === 4) reviewUrl = window.four
    if (review.rating === 5) reviewUrl = window.five
    if (!business) return null;

    let subCate = business.subCategory ? `, ${business.subCategory}` : "";

    return (
      <div className="profile-review-index-item-container">
        <div className="profile-review-business-container">
          <Link to={`/businesses/${business.id}`}>
            <img src={business.profPic} alt=""/>
          </Link>
          <div className="profile-review-business-info">
            <Link to={`/businesses/${business.id}`}>{business.name}</Link>
            <p>{`${business.category}${subCate}`}</p>
            <p>{business.address}</p>
            <p>{`${business.city}, ${business.state} ${business.zipcode}`}</p>
          </div>
        </div>
        <div className="profile-review-item-ratings">
          <img src={reviewUrl} alt=""/>
          <span>{date}</span>
        </div>
        <div className="profile-review-item-body">
          <p>{review.body}</p>
        </div>
        
          {this.props.currentUser && this.props.currentUser.id === review.author_id ?
          <div className="profile-review-item-footer">
            <Link to={`/businesses/${business.id}/reviews/${review.id}/edit`}>
              <button onMouseOver={this.highlightButton} onMouseOut={this.unhighlightButton}>
                <span>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </span>
              </button> 
            </Link>
            <button onClick={this.handleDelete.bind(this)} onMouseOver={this.highlightButton}
              onMouseOut={this.unhighlightButton}>
              <span>
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
            </button>
          </div>
            : ""}
        
      </div>
    )
  }
  
}