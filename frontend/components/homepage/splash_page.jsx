import React from 'react';
import { Link } from 'react-router-dom'
import UserProfile from '../nav_bar/user_profile_container';

export default class Homepage extends React.Component {

  handleLogOut(e) {
    e.preventDefault();
    this.props.signout()
  }

  render() {
    
    return (
      <div>
        <div className="home-content">
          <header>
            <div id="home-links">

              <Link to="/businesses"><button>Write a Review</button></Link>
              <a href="https://github.com/jasonliao122895">Github</a>
              <a href="https://www.linkedin.com/in/jliao1228/">LinkedIn</a>
            </div>
            <div>
              { !this.props.loggedIn ? 
                <div>
                  <Link to="/login">Log In</Link>
                  <Link to="/signup" id="signup-but">Sign Up</Link>
                </div>
                :
                <div className="welcome-msg">
                  <h4>Welcome, {this.props.user.firstName} {` ${this.props.user.lastName}.`} </h4>
                  <UserProfile />
                </div>
              }
            </div>
          </header>
        </div>
        
      </div>
    )
  }
}