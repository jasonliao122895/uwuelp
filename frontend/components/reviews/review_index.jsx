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
          .then(() => {
            this.setState({ reactions: this.state.reactions.concat(this.props.reactions) })
          })
      })
    }
    // debugger
  }

  componentDidUpdate(prevProps, prevState) {
    // debugger
    if (this.props.reviews.length !== prevProps.reviews.length) {
      this.props.fetchReviews(this.props.business.id)

      if (this.props.reviews.length > 0) {

        this.props.reviews.forEach((review) => {
          this.props.fetchReactions(review)
        })
      }
    }

    let totalNumUseful = this.props.reviews.map((review) => review.numUseful)
    if (totalNumUseful.length !== 0) {
      totalNumUseful = totalNumUseful.reduce((acc, el) => acc + el)
    }

    let totalNumFunny = this.props.reviews.map((review) => review.numFunny)
    if (totalNumFunny.length !== 0) {
      totalNumFunny = totalNumFunny.reduce((acc, el) => acc + el)
    }

    let totalNumCool = this.props.reviews.map((review) => review.numCool)
    if (totalNumCool.length !== 0) {
      totalNumCool = totalNumCool.reduce((acc, el) => acc + el)
    }

    let preNumUseful = prevProps.reviews.map((review) => review.numUseful)
    if (preNumUseful.length !== 0) {
      preNumUseful = preNumUseful.reduce((acc, el) => acc + el)
    } else {
      preNumUseful = 0
    }

    let preNumFunny = prevProps.reviews.map((review) => review.numFunny)
    if (preNumFunny.length !== 0) {
      preNumFunny = preNumFunny.reduce((acc, el) => acc + el)
    } else {
      preNumFunny = 0
    }

    let preNumCool = prevProps.reviews.map((review) => review.numCool)
    if (preNumCool.length !== 0) {
      preNumCool = preNumCool.reduce((acc, el) => acc + el)
    } else {
      preNumCool = 0
    }
    // debugger
    // if (totalNumUseful !== preNumUseful || totalNumCool !== preNumCool || totalNumFunny !== preNumFunny) {
    //   this.props.fetchReviews(this.props.business.id)
    // } 
    // debugger
    // debugger
    // if (this.props.reactions.length !== 0 && this.props.reactions !== prevProps.reactions) {
      // debugger
      // this.props.fetchReviews(this.props.business.id)
    // }

    // debugger

    // if (this.props.reactions.length !== 0 && this.props.reactions !== prevProps.reactions) {
      // debugger;
      // this.setState({load: false})
      // if (this.state.load) {
        // this.props.fetchReviews(this.props.business.id)
        
      // }
    // }


  }

  render() {
    let {numCool, numFunny, numUseful} = this.props
    let reviews = this.props.reviews.reverse().map(review => {
      return <ReviewIndexItem 
      currentUser={this.props.currentUser} key={review.id} 
      review={review} deleteReview={this.props.deleteReview}
      fetchReaction={this.props.fetchReaction} numCool={numCool} numFunny={numFunny} numUseful={numUseful} />
    })
    // debugger
    return (
      <div>
        <ul>
          <p>{`Cool: ${numCool}, Funny: ${numFunny}, Useful ${numUseful}`}</p>
        </ul>
        {reviews}
      </div>
    )
  }
}