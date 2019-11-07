import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import UserProfileContainer from '../../nav_bar/user_profile_container';
import ModalContainer from '../../session_forms/modal';

export default class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    let body;
    let rating;
    if (this.props.review === undefined) {
      body = ""
      rating = "0"
    } else {
      rating = this.props.review.rating.toString();
      body = this.props.review.body
    }
    this.state = {
      rating: rating,
      body: body,
      business_id: this.props.match.params.businessId,
      id: this.props.match.params.id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {

    window.scrollTo(0, 0)

    let reviewErrors = document.getElementsByClassName('review-errors');
    reviewErrors = Array.from(reviewErrors);

    reviewErrors.forEach(error => {
      error.classList.add('hide');
    })
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  

  componentDidUpdate() {
    
    let star5 = document.getElementById('lstar5');
    let star4 = document.getElementById('lstar4');
    let star3 = document.getElementById('lstar3');
    let star2 = document.getElementById('lstar2');
    let star1 = document.getElementById('lstar1');
    let msg = document.getElementById('rating-msg')
    let msgText = msg.textContent;
    if (star5 && star4 && star3 && star2 && star1) {

      star5.addEventListener('mouseover', () => {
        star5.style.backgroundColor = '#dd050b';
        star4.style.backgroundColor = '#dd050b';
        star3.style.backgroundColor = '#dd050b';
        star2.style.backgroundColor = '#dd050b';
        star1.style.backgroundColor = '#dd050b';
        msg.innerText = "Woohoo! As good as it gets!";
      })

      star5.addEventListener('mouseout', () => {
        star5.style.backgroundColor = '';
        star4.style.backgroundColor = '';
        star3.style.backgroundColor = '';
        star2.style.backgroundColor = '';
        star1.style.backgroundColor = '';
        msg.innerText = msgText;
      })


      star4.addEventListener('mouseover', () => {
        star5.style.backgroundColor = '#666';
        star4.style.backgroundColor = '#f26a2c';
        star3.style.backgroundColor = '#f26a2c';
        star2.style.backgroundColor = '#f26a2c';
        star1.style.backgroundColor = '#f26a2c';
        msg.innerText = "Yay! I'm a fan.";
      })

      star4.addEventListener('mouseout', () => {
        star5.style.backgroundColor = '';
        star4.style.backgroundColor = '';
        star3.style.backgroundColor = '';
        star2.style.backgroundColor = '';
        star1.style.backgroundColor = '';
        msg.innerText = msgText;
      })

      star3.addEventListener('mouseover', () => {
        star5.style.backgroundColor = '#666';
        star4.style.backgroundColor = '#666';
        star3.style.backgroundColor = '#f0991e';
        star2.style.backgroundColor = '#f0991e';
        star1.style.backgroundColor = '#f0991e';
        msg.innerText = "A-OK.";
      })

      star3.addEventListener('mouseout', () => {
        star5.style.backgroundColor = '';
        star4.style.backgroundColor = '';
        star3.style.backgroundColor = '';
        star2.style.backgroundColor = '';
        star1.style.backgroundColor = '';
        msg.innerText = msgText;
      })

      star2.addEventListener('mouseover', () => {
        star5.style.backgroundColor = '#666';
        star4.style.backgroundColor = '#666';
        star3.style.backgroundColor = '#666';
        star2.style.backgroundColor = '#dcb228';
        star1.style.backgroundColor = '#dcb228';
        msg.innerText = "Meh. I've experienced better.";
      })

      star2.addEventListener('mouseout', () => {
        star5.style.backgroundColor = '';
        star4.style.backgroundColor = '';
        star3.style.backgroundColor = '';
        star2.style.backgroundColor = '';
        star1.style.backgroundColor = '';
        msg.innerText = msgText;
      })

      star1.addEventListener('mouseover', () => {
        star5.style.backgroundColor = '#666';
        star4.style.backgroundColor = '#666';
        star3.style.backgroundColor = '#666';
        star2.style.backgroundColor = '#666';
        star1.style.backgroundColor = '#cc8b1f';
        msg.innerText = "Eek! Me thinks not.";
      })

      star1.addEventListener('mouseout', () => {
        star5.style.backgroundColor = '';
        star4.style.backgroundColor = '';
        star3.style.backgroundColor = '';
        star2.style.backgroundColor = '';
        star1.style.backgroundColor = '';
        msg.innerText = msgText;
      })

    }
  }

  handleModal(e) {
    e.preventDefault();
    const body = document.querySelector('body');
    body.classList.add('modal-open')
    this.props.openModal('not logged in')
  }


  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    
    e.preventDefault();
    this.props.action(this.state)
      .then(
        () => this.props.history.replace(`/businesses/${this.props.business.id}`),
        () => {
          let reviewErrors = document.getElementsByClassName('review-errors');
          reviewErrors = Array.from(reviewErrors)
          reviewErrors.forEach(error => {
            error.classList.remove('hide');
          })
          setTimeout(() => {
            reviewErrors.forEach(error => {
              error.classList.add('hide');
            })
          }, 2500)
        }
      )
    
    
  }

  render() {
    let ratingMsg;
    if (this.state.rating === "5") ratingMsg = "Woohoo! As good as it gets!"
    if (this.state.rating === "4") ratingMsg = "Yay! I'm a fan."
    if (this.state.rating === "3") ratingMsg = "A-OK."
    if (this.state.rating === "2") ratingMsg = "Meh. I've experienced better."
    if (this.state.rating === "1") ratingMsg = "Eek! Me thinks not."
    if (this.state.rating === "0") ratingMsg = "Please select a rating."
    if (this.props.business === undefined) return (<div></div>);
    let { business } = this.props
    let placeholder = "Your review helps others learn about great local businesses. \n \nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
  
    return (
      <div>
        <ModalContainer />
        <header className="review-form-header">
          <div className="review-form-nav">

            <div>
              <Link to="/">
                <span><h3>UwU</h3></span>
                <h1>elp</h1>
              </Link>
            </div>
            <h2>
              {this.props.formType === "create" ? "Write a Review" : "Edit Your Review" }
            </h2>
            <div className="empty-div-review-container">

              <div className="empty-div-review">
                <UserProfileContainer />
              </div>

            </div>

          </div>
        </header>

        <div>
        
          <form className="review-form">
            <div>
              <div>
                <Link to={`/businesses/${business.id}`}>
                  <h1>{business.name}</h1>
                </Link>
              </div>

              <div className="review-form-container"> 

                <div className="rating">
                  <p id="rating-msg">{ratingMsg}</p>
                  <input 
                  type="radio" name="rating" className="star5" 
                  value="5" id="star5" onChange={this.handleInput('rating')}
                  checked={this.state.rating === '5' ? true : false }
                   />
                  <label htmlFor="star5" id="lstar5" >
                    <FontAwesomeIcon icon={faStar} />
                  </label>

                  <input 
                  type="radio" name="rating" className="star4" 
                  value="4" id="star4" onChange={this.handleInput('rating')}
                  checked={this.state.rating === '4' ? true : false }
                   />
                  <label htmlFor="star4" id="lstar4">
                    <FontAwesomeIcon icon={faStar} />
                  </label>

                  <input 
                  type="radio" name="rating" className="star3" 
                  value="3" id="star3" onChange={this.handleInput('rating')}
                  checked={this.state.rating === '3' ? true : false} 
                  />
                  <label htmlFor="star3" id="lstar3">
                    <FontAwesomeIcon icon={faStar} />
                  </label>

                  <input type="radio" name="rating" className="star2" 
                  value="2" id="star2" onChange={this.handleInput('rating')}
                  checked={this.state.rating === '2' ? true : false}
                   />
                  <label htmlFor="star2" id="lstar2">
                    <FontAwesomeIcon icon={faStar} />
                  </label>

                  <input type="radio" name="rating" className="star1" 
                  value="1" id="star1" onChange={this.handleInput('rating')} 
                  checked={this.state.rating === '1' ? true : false}
                  />
                  <label htmlFor="star1" id="lstar1">
                    <FontAwesomeIcon icon={faStar} />
                  </label>
                </div>
                <textarea onChange={this.handleInput('body')} value={this.state.body} cols="30" rows="10" placeholder={placeholder}></textarea>

                
                  {this.props.errors.map((error) => <li className="review-errors">{error}</li>)}
                
              </div>
            </div>

            {
              this.props.loggedIn ?
              <button onClick={this.handleSubmit}>{this.props.formType === "create" ? "Post Review" : "Edit Review"}</button> :
              
                <button id="modal-open-but" onClick={this.handleModal}>
                  {this.props.formType === "create" ? "Post Review" : "Edit Review"}
              </button>
              
            }
          </form>
        </div>
      </div>
    )
  }
}

