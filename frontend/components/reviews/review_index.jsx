import React from 'react';
import ReviewIndexItem from './review_index_item';


export default  class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalFunny: 0,
      totalUseful: 0,
      totalCool: 0,
      reactions: this.props.reactions 
    }
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.business.id)

    
    // let totalNumUseful = this.props.reviews.map((review) => review.numUseful)
    // if (totalNumUseful.length !== 0) {
    //   totalNumUseful = totalNumUseful.reduce((acc, el) => acc + el)
    // }

    // let totalNumFunny = this.props.reviews.map((review) => review.numFunny)
    // if (totalNumFunny.length !== 0) {
    //   totalNumFunny = totalNumFunny.reduce((acc, el) => acc + el)
    // }

    // let totalNumCool = this.props.reviews.map((review) => review.numCool)
    // if (totalNumCool.length !== 0) {
    //   totalNumCool = totalNumCool.reduce((acc, el) => acc + el)
    // }

    // if (totalNumUseful > 0) this.setState({totalUseful: totalNumUseful});
    // if (totalNumFunny > 0) this.setState({totalFunny: totalNumFunny});
    // if (totalNumCool > 0) this.setState({totalCool: totalNumCool})

    // debugger
    if (this.props.reviews.length > 0) {

      this.props.reviews.forEach((review) => {
        this.props.fetchReactions(review)
      })
    }
    // debugger
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (this.props.reviews.length !== prevProps.reviews.length) {
      this.props.fetchReviews(this.props.business.id)

      if (this.props.reviews.length > 0) {

        this.props.reviews.forEach((review) => {
          this.props.fetchReactions(review)
        })
      }
    }

    if (this.props.reactions.length != prevProps.reactions.length) {
      this.props.fetchReviews(this.props.business.id)
    }

    

  }

  render() {
    let {numCool, numFunny, numUseful} = this.props
    let reviews = this.props.reviews.reverse().map(review => {
      return <ReviewIndexItem 
      currentUser={this.props.currentUser} key={review.id} 
        review={review} deleteReview={this.props.deleteReview} fetchReviews={this.props.fetchReviews} businessId={this.props.business.id}
      fetchReactions={this.props.fetchReactions} numCool={numCool} numFunny={numFunny} numUseful={numUseful} />
    })
    // debugger
    return (
      <div>
        {reviews}
      </div>
    )
  }
}