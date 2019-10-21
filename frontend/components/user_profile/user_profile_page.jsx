import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFemale, faMale } from '@fortawesome/free-solid-svg-icons';
import Modal from '../session_forms/modal';
import {ProfileOverview} from '../user_profile/profile_main/profile_overview';
import {ProfileFriends} from '../user_profile/profile_main/profile_friends';
import {ProfileReviews} from '../user_profile/profile_main/profile_reviews';

export default class UserProfilePage extends React.Component {

  constructor(props) {
    super(props)
    this.fetchUser = this.props.fetchUser.bind(this);
    this.state = {
      active: "Profile Overview"
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.fetchUser(this.props.match.params.id)
    }

    if (this.props.user.profPic !== prevProps.user.profPic) {
      this.props.fetchUser(this.props.match.params.id)
    }
  } 

  handleModal(e) {
    e.preventDefault();
    const body = document.querySelector('body');
    body.classList.add('modal-open')
    this.props.openModal(e.target.innerHTML)
  }

  handleToggleMain(e) {
    e.preventDefault();
    this.setState({
      active: e.target.innerHTML
    })
  }

  renderMain() {
    if (this.state.active === "Profile Overview") {
      return <ProfileOverview />
    } else if (this.state.active === "Friends") {
      return <ProfileFriends />
    } else if (this.state.active === "Reviews") {
      return <ProfileReviews />
    }
  }


  render() {
  
    return (
      <div>
        <Modal user={this.props.user} profile={this}/>
        <NavBar />
        <div className="user-information">

          
          
            <div className="user-basic-info-container">

              
                <div className="user-basic-info">
                  <h1>{`${this.props.user.firstName} ${this.props.user.lastName}.`}</h1>
                  <div className="user-reviews-and-friends">

                    <p>
                      <span><FontAwesomeIcon id="current-user-star" icon={faStar} /></span>
                      {(this.props.user && this.props.user.numReviews) ? `${this.props.user.numReviews} Reviews` : "0 Reviews"}
                    </p>
                    <p>
                      <span><FontAwesomeIcon id="current-user-friend" icon={faFemale} /></span>
                      <span><FontAwesomeIcon id="current-user-friend2" icon={faMale} /></span>
                      {this.props.user ? "4 Friends" : "N/A"}
                    </p>

                  </div>
                </div>

                {
                  this.props.currentUserId === this.props.user.id ? 
                  <div className="current-user-modification-links">
                    
                  <p onClick={this.handleModal.bind(this)} >Add Profile Photo</p>
                  <p onClick={this.handleModal.bind(this)}>Update Your Profile</p>
                    <p>Find Friends</p>
                  </div> : 
                  <div className="not-current-user-modification-links">

                  </div>
                }

              
            </div>
          <img src={this.props.user.profPic} alt="" />
        </div>

        <div className="main-content-container">

          <div className="users-profiles-links">
            <ul>
              <h3>{`${this.props.user.firstName}'s Profile`}</h3>
              <li onClick={this.handleToggleMain.bind(this)}>Profile Overview</li>
              <li onClick={this.handleToggleMain.bind(this)}>Friends</li>
              <li onClick={this.handleToggleMain.bind(this)}>Reviews</li>
            </ul>
          </div>

          <div className="main-content-user-profile">
            {this.renderMain()}
          </div>
          
        </div>
      </div>
    )
  }
}