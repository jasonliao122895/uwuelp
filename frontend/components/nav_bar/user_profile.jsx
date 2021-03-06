import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faStar, faMale, faFemale } from '@fortawesome/free-solid-svg-icons'

class UserProfile extends React.Component {

  componentDidMount() {
    let profileMenu = document.getElementById('profile-menu');
    if (profileMenu) {
      window.addEventListener('mouseup', (e) => {
        if (e.target !== profileMenu) {
          profileMenu.classList.add('hide');
        }
      })
    }

    if (this.props.currentUser && !this.props.currentUser.city) {
      this.props.fetchUser(this.props.currentUser.id);
    }
  }

  componentDidUpdate(prevProps) {
    
    if (prevProps.location.pathname !== this.props.location.pathname) {
      let profileMenu = document.getElementById('profile-menu');
      profileMenu.classList.add('hide');
    }
  }


  handleToggle() {
    let profileMenu = document.getElementById('profile-menu');
    profileMenu.classList.remove('hide');
  }
  

  render() {
    
    // if (!this.props.currentUser.friends) return null;
    return (
      <div>
        {
          !this.props.loggedIn ?
            <div>
              <Link id="nav-sess" to="/login"><button className="nav-login">Log In</button></Link>
              <Link id="nav-sess" to="/signup"><button className="nav-signup">Sign Up</button></Link>
            </div>
            : 
            <div className="profile-option-container">

              <div className="profile-option" onClick={this.handleToggle}>
                <img src={this.props.currentUser.profPic} alt=""/>
                <span><FontAwesomeIcon id="caret-down" icon={faCaretDown} /></span>
              </div>
              
              <div id="profile-menu" onClick={this.handleToggle} className="hide">
                <div id="profile-infos">
                  <img src={this.props.currentUser.profPic} alt="" />
                  <div>
                    <h4>{`${this.props.currentUser.firstName}  ${this.props.currentUser.lastName}.`}</h4>
                    <p>{`${this.props.currentUser.city}, ${this.props.currentUser.state}`}</p>
                    <p>
                      <span><FontAwesomeIcon id="current-user-star" icon={faStar} /></span>
                      {`${this.props.currentUser.numReviews} Reviews`}
                    </p>
                    <p>
                      <span><FontAwesomeIcon id="current-user-friend" icon={faFemale} /></span>
                      <span><FontAwesomeIcon id="current-user-friend2" icon={faMale} /></span>
                      {this.props.currentUser.friends ? 
                        `${this.props.currentUser.friends.length} ` : ""}
                      {this.props.currentUser.friends && this.props.currentUser.friends.length < 2 ? 'Friend' : "Friends"}
                    </p>
                  </div>
                </div>
                <ul className="profile-list">
                  <Link to={`/users/${this.props.currentUser.id}`}>About Me</Link>
                
                </ul>
                <a id="logout-link" onClick={this.props.signout}>Log Out</a>
              </div>
            </div>
        }
      </div>
    )
  }
}

export default withRouter(UserProfile);