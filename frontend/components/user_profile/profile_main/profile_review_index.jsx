import React from 'react';
import ProfileReviewIndexItemContainer from './profile_review_index_item_container';

export default class ProfileReviewsIndex extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    let reviews = this.props.reviews.map(review => {
      return <ProfileReviewIndexItemContainer key={review.id} review={review} />
    })

    return (
      <div className="profile-review-index-container">
        {reviews}
      </div>
    )
  }
}