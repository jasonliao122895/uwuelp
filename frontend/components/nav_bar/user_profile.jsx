import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faStar, faMale, faFemale } from '@fortawesome/free-solid-svg-icons'

export default class UserProfile extends React.Component {

  componentDidMount() {
    let profileMenu = document.getElementById('profile-menu');
    if (profileMenu) {
      window.addEventListener('mouseup', (e) => {
        if (e.target !== profileMenu) {
          profileMenu.classList.add('hide');
        }
      })
    }
  }

  handleToggle() {
    let profileMenu = document.getElementById('profile-menu');
    profileMenu.classList.remove('hide');
  }


  render() {
    return (
      <div>
        {
          !this.props.loggedIn ?
            <div>
              <Link to="/login"><button className="nav-login">Log In</button></Link>
              <Link to="/signup"><button className="nav-signup">Sign Up</button></Link>
            </div>
            : 
            <div className="profile-option-container">
              <div className="profile-option" onClick={this.handleToggle}>
                <img src={this.props.currentUser.profPic} alt=""/>
                <span><FontAwesomeIcon id="caret-down" icon={faCaretDown} /></span>
              </div>
              <div id="profile-menu" className="hide">
                <div id="profile-infos">
                  <img src={this.props.currentUser.profPic} alt="" />
                  <div>
                    <h4>{`${this.props.currentUser.firstName}  ${this.props.currentUser.lastName}.`}</h4>
                      
                    <p>
                      <span><FontAwesomeIcon id="current-user-star" icon={faStar} /></span>
                      {`${this.props.currentUser.numReviews} Reviews`}
                    </p>
                    <p>
                      <span><FontAwesomeIcon id="current-user-friend" icon={faFemale} /></span>
                      <span><FontAwesomeIcon id="current-user-friend2" icon={faMale} /></span>
                      4 Friends
                    </p>
                  </div>
                </div>
                <ul className="profile-list">
                  <li><a >Features</a></li>
                  <li><a >GitHub</a></li>
                  <li><a >LinkedIn</a></li>
                </ul>
                <a id="logout-link" onClick={this.props.signout}>Log Out</a>
              </div>
            </div>
        }
      </div>
    )
  }
}