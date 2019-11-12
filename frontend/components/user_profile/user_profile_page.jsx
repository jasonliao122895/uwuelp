import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFemale, faMale } from '@fortawesome/free-solid-svg-icons';
import Modal from '../session_forms/modal';
import ProfileOverviewContainer from '../user_profile/profile_main/profile_overview_container';
import {ProfileFriends} from '../user_profile/profile_main/profile_friends';
import {ProfileReviews} from '../user_profile/profile_main/profile_reviews';
import FriendRequestContainer from '../friend_request/send_request_container';
import RemoveFriendContainer from '../friend_request/remove_friend_container';
import CancelFriendRequestContainer from '../friend_request/cancel_friend_request_container'

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
    this.handleHighlight();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.fetchUser(this.props.match.params.id)
      this.setState({active: "Profile Overview"})
    }

    if (this.state.active === 'Profile Overview') {
      this.handleHighlight();
    }

    if (this.props.user && prevProps.user && this.props.user.profPic !== prevProps.user.profPic) {
      this.props.fetchUser(this.props.match.params.id)
    }
    
    if (prevState.active !== this.state.active) {
      this.handleHighlight();
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
      return <ProfileOverviewContainer user={this.props.user}/>
    } else if (this.state.active === "Friends") {
      return <ProfileFriends friends={this.props.user.friends} fetchUser={this.props.fetchUser} />
    } else if (this.state.active === "Reviews") {
      return <ProfileReviews reviews={this.props.user.reviews} />
    }
  }

  handleHighlight() {
    const profileOverview = document.querySelector('.profile-overview');
    const profileFriends = document.querySelector('.profile-friends')
    const profileReviews = document.querySelector('.profile-reviews')
  
    if (this.state.active === "Profile Overview" && profileOverview) {
      profileOverview.style.borderLeft = '4px solid #D2AA0D'
      profileOverview.style.backgroundColor = '#e6e6e6'
      profileFriends.style.borderLeft = "";
      profileFriends.style.backgroundColor = "";
      profileReviews.style.borderLeft = "";
      profileReviews.style.backgroundColor = "";
    } else if (this.state.active === 'Friends' && profileFriends) {
      profileFriends.style.borderLeft = '4px solid #D2AA0D'
      profileFriends.style.backgroundColor = '#e6e6e6'
      profileReviews.style.borderLeft = "";
      profileReviews.style.backgroundColor = "";
      profileOverview.style.borderLeft = "";
      profileOverview.style.backgroundColor = "";
    } else if (this.state.active === 'Reviews' && profileReviews) {
      profileReviews.style.borderLeft = '4px solid #D2AA0D'
      profileReviews.style.backgroundColor = '#e6e6e6'
      profileOverview.style.borderLeft = "";
      profileOverview.style.backgroundColor = "";
      profileFriends.style.borderLeft = "";
      profileFriends.style.backgroundColor = "";
    }
  }


  render() {
    
    if (!this.props.user) return null;
    let friendIds;
    if (this.props.user.friends) {
      friendIds = this.props.user.friends.map(friend => friend.id)
    }
    let friendRequesters;
    if (this.props.user.friendRequests) {
      friendRequesters = this.props.user.friendRequests.map(request => {
        return request.requester_id
      })
    }
    
    
    return (
      <div>
        <Modal user={this.props.user} profile={this}/>
        <NavBar />
        <div className="user-information">
            <div className="user-information-spacing">

            </div>
          
          
            <div className="user-basic-info-container">

              
                <div className="user-basic-info">
                  <h1>{`${this.props.user.firstName} ${this.props.user.lastName}.`}</h1>
                  <p>{`${this.props.user.city}, ${this.props.user.state}`}</p>
                  <div className="user-reviews-and-friends">

                    <p>
                      <span><FontAwesomeIcon id="current-user-star" icon={faStar} /></span>
                      {(this.props.user && this.props.user.numReviews) ? `${this.props.user.numReviews} Reviews` : "0 Reviews"}
                    </p>
                    <p>
                      <span><FontAwesomeIcon id="current-user-friend" icon={faFemale} /></span>
                      <span><FontAwesomeIcon id="current-user-friend2" icon={faMale} /></span>
                      {this.props.user && friendIds ? `${friendIds.length} ` : ""}
                      {friendIds && friendIds.length < 2 ? "Friend" : "Friends"}
                    </p>
                  </div>
                    {this.props.currentUserId && this.props.currentUserId !== parseInt(this.props.match.params.id) && !friendIds.includes(this.props.currentUserId) && friendRequesters && !friendRequesters.includes(this.props.currentUserId) ? <FriendRequestContainer fetchUser={this.props.fetchUser} /> : ""}
                    {this.props.currentUserId !== parseInt(this.props.match.params.id) && friendIds.includes(this.props.currentUserId) ? <RemoveFriendContainer userId={this.props.user.id} fetchUser={this.props.fetchUser} /> : ""}
                    {friendRequesters && friendRequesters.includes(this.props.currentUserId) ? <CancelFriendRequestContainer fetchUser={this.props.fetchUser}/> : ""}
                </div>

                {
                  this.props.currentUserId === this.props.user.id ? 
                  <div className="current-user-modification-links">
                    
                  <p onClick={this.handleModal.bind(this)} >Add Profile Photo</p>
                  <p onClick={this.handleModal.bind(this)}>Update Your Profile</p>
                  <p onClick={this.handleModal.bind(this)}>Find Friends</p>
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
              <li className="profile-overview" onClick={this.handleToggleMain.bind(this)}>Profile Overview</li>
              <li className="profile-friends" onClick={this.handleToggleMain.bind(this)}>Friends</li>
              <li className="profile-reviews" onClick={this.handleToggleMain.bind(this)}>Reviews</li>
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