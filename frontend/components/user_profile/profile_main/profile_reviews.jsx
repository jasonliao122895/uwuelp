import React from 'react'
import ProfileReviewsIndex from './profile_review_index';


export const ProfileReviews = (props) => {

  return  (
    <div className="profile-review-container">
      <h2>Reviews</h2>
      <ProfileReviewsIndex reviews={props.reviews} />
    </div>
  )
}