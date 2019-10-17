import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFemale, faMale } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class UserProfilePage extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.fetchUser(this.props.match.params.id)
    }
  } 


  render() {
  
    return (
      <div>
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
                    <Link to={'/profilepic'}>
                      <p>Add Profile Photo</p>
                    </Link>
                    <p>Update Your Profile</p>
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
              <li>Profile Overview</li>
              <li>Friends</li>
              <li>Reviews</li>
            </ul>
          </div>

          <div className="main-content-user-profile">
            <h1>main stuff</h1>
          </div>
          
        </div>
      </div>
    )
  }
}