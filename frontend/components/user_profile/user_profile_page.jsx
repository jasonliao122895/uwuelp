import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFemale, faMale } from '@fortawesome/free-solid-svg-icons';

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
    debugger
    return (
      <div>
        <NavBar />
        <div className="user-information">

          <img src={this.props.user.profPic} alt=""/>
          <div>
            <div className="user-basic-info-container">

              <div className="user-basic-info">
                <h3>{`${this.props.user.firstName} ${this.props.user.lastName}.`}</h3>
                <div>

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

                {
                  this.props.currentUserId === this.props.user.id ? 
                  <div className="current-user-modification-links">
                    <p>Add Profile Photos</p>
                    <p>Update Your Profile</p>
                    <p>Find Friends</p>
                  </div> : 
                  <div className="not-current-user-modification-links">

                  </div>
                }

              </div>
            </div>
            <div className="users-profiles-links">

            </div>
          </div>
        </div>
      </div>
    )
  }
}