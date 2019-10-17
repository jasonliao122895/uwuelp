import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFemale, faMale, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import ReactionCreateContainer from '../reactions/reaction_create_container';
import ReactionUpdateContainer from '../reactions/reaction_update_container';

export default class ReviewIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidUpdate(prevProps) {
    
    let condition = (this.props.numCool !== prevProps.numCool || this.props.numUseful !== prevProps.numUseful || this.props.numFunny !== prevProps.numFunny)
    
    if (this.props.review.numReacts && prevProps.review.numReacts && condition) {
      this.props.fetchReviews(this.props.businessId)
    }
 
  }

  handleDelete(e) {
    e.preventDefault()
    let obj = { id: this.props.review.id, business_id: this.props.review.businessId }
    this.props.deleteReview(obj)
  }

  showEdit(e) {
   
    let editLink = document.getElementById(`edit-link-${e.currentTarget.dataset.reviewId}`)
    
    if (editLink) {
      editLink.classList.remove('hide');
    }
    
  }

  hideEdit(e) {
    
    let editLink = document.getElementById(`edit-link-${e.currentTarget.dataset.reviewId}`)

     if (editLink) {
       editLink.classList.add('hide');
     } 
  
  }

  render() {
    
    let { review, currentUser, numCool, numFunny, numUseful } = this.props
    let date = new Date(review.createAt);
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let reviewNumUseful;
    let reviewNumFunny;
    let reviewNumCool;
    if (review.numReacts) {
      reviewNumUseful = review.numReacts.filter((reaction) => reaction.useful === true).length
      reviewNumFunny = review.numReacts.filter((reaction) => reaction.funny === true).length
      reviewNumCool = review.numReacts.filter((reaction) => reaction.cool === true).length
    }
    let reviewUrl;
    if (review.rating === 1) reviewUrl = window.one
    if (review.rating === 2) reviewUrl = window.two
    if (review.rating === 3) reviewUrl = window.three
    if (review.rating === 4) reviewUrl = window.four
    if (review.rating === 5) reviewUrl = window.five
    
    if (review === undefined ) return (<div></div>)
    // debugger;
    return (
      <div className="review-container" id="review-container" data-review-id={review.id}
        onMouseOver={this.showEdit} onMouseOut={this.hideEdit}  >
        <div id="business-show-author">
          <img src={review.authorPic} alt="" />
          <div>
            <h4>{`${review.authorFirst}  ${review.authorLast}.`}</h4>
            <p>
              <span><FontAwesomeIcon id="current-user-star" icon={faStar} /></span>
              {`${review.authorNumReviews} Reviews`}
            </p>
            <p>
              <span><FontAwesomeIcon id="current-user-friend" icon={faFemale} /></span>
              <span><FontAwesomeIcon id="current-user-friend2" icon={faMale} /></span>
              4 Friends
          </p>
          </div>
          
          <div id="show-edit-link">
            { currentUser && currentUser.id === review.authorId ?
            <Link className="hide" id={`edit-link-${review.id}`}  to={`/businesses/${review.businessId}/reviews/${review.id}/edit`}>Edit Review</Link> : ""
            }
          </div>
        
        </div>
        <div id="business-show-review-info">
          <div>
            <div className="rating-created-at">
              <img src={reviewUrl} alt=""/>
              <p style={{ color: '#666', fontSize: '14px' }} >{`${month}/${day}/${year}`}</p>
            </div>
            <span style={{ fontSize: '14px', color: 'black' }}>{review.body}</span>
            <div className="rating-buts">

              <div className="reaction-buts">

                { currentUser && review.currentUserReaction && review.currentUserReaction.length === 0 && review.authorId !== currentUser.id ?
                  <ReactionCreateContainer reviewId={review.id} numUseful={reviewNumUseful} numFunny={reviewNumFunny} numCool={reviewNumCool}  /> :
                  ""
                } 

                { currentUser && review.currentUserReaction && review.currentUserReaction.length > 0 && review.authorId !== currentUser.id ? <ReactionUpdateContainer reaction={review.currentUserReaction[0]} review={review} numUseful={reviewNumUseful} numFunny={reviewNumFunny} numCool={reviewNumCool} /> : ""
                }

                { currentUser === undefined || currentUser.id === review.authorId ? 
                  <div className="reaction-amounts">
                    <h6><span role="img" aria-label="lightbulb">💡</span>{`Useful ${reviewNumUseful}`}</h6>
                    <h6><span role="img" aria-label="funny">😂</span>{`Funny ${reviewNumFunny}`}</h6>
                    <h6><span role="img" aria-label="funny">😎</span>{`Cool ${reviewNumCool}`}</h6>
                  </div>
                    :
                    ""
                }



              </div>

              <div className="reaction-empty-div">

              </div>
              
              { currentUser && currentUser.id === review.authorId ?
                <button onClick={this.handleDelete}><span className="delete-but"><FontAwesomeIcon icon={faTrashAlt} /></span></button>
                : ""}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

