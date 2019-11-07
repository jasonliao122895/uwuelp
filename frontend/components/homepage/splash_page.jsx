import React from 'react';
import { Link } from 'react-router-dom'
import UserProfile from '../nav_bar/user_profile_container';
import SearchContainer from '../search/search_container';


export default class Homepage extends React.Component {

  constructor(props) {
    super(props);
  }

  
  handleLogOut(e) {
    e.preventDefault();
    this.props.signout()
  }




  render() {
    let bkPics = [window.bk1, window.bk2, window.bk3]
    let rand = Math.floor(Math.random() * Math.floor(3))

    return (
      <div>
        <div className="background-image">
          <div className="bk-container">
            <div className="bk-slider">
              <img className="bk-slides" src={bkPics[rand]} alt=""/>
              {/* <img className="bk-slides" src={window.bk2} alt=""/>
              <img className="bk-slides" src={window.bk3} alt=""/> */}
            </div>
          </div>
        </div>
        <div className="home-content">
          <header>
            <div id="home-links">
              <a className="social-links" href="https://github.com/jasonliao122895">Github</a>
              <a className="social-links" href="https://www.linkedin.com/in/jliao1228/">LinkedIn</a>
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

          <div className="splash-logo">
            <div className="logo">
              <Link to="/">
                <span><h3>UwU</h3></span>
                <h1>elp</h1>
              </Link>
            </div>
            <div className="splash-search">

              <SearchContainer />

            </div>
          </div>
          
          

        </div>
        
      </div>
    )
  }
}