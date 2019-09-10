import React from 'react';
import { Link } from 'react-router-dom'


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
              <button>Github</button>
              <button>LinkedIn</button>
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
                  <button id="logout-but"onClick={this.handleLogOut.bind(this)}>Log Out</button>
                </div>
              }
            </div>
          </header>
        </div>
      </div>
    )
  }
}