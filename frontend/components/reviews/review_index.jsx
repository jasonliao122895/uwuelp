import React from 'react';
import ReviewIndexItem from './review_index_item';


export default  class ReviewIndex extends React.Component {

  componentDidMount() {
    this.props.fetchReviews(this.props.business.id)
  }

  render() {

    let reviews = this.props.reviews.reverse().map(review => {
      return <ReviewIndexItem 
      currentUser={this.props.currentUser} key={review.id} 
      review={review} deleteReview={this.props.deleteReview} />
    })
    
    return (
      <div>
        {reviews}
      </div>
    )
  }
}