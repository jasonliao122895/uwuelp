import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ signout, loggedIn }) => (
  <header className="nav-bar">
    <div className="logo">
      <Link to="/">
        <span><h3>UwU</h3></span>
        <h1>elp</h1>
      </Link>
    </div>
    <label className="nav-find">
      Find
      <input type="text"/>
    </label>
    <label className="nav-near">
      Near
      <input type="text"/>
    </label>
    <button className="nav-search-but"><span role="img" aria-label="search">🔍</span></button>
    {
      !loggedIn ? 
      <div>
        <Link to="/login"><button className="nav-login">Log In</button></Link>
        <Link to="/signup"><button className="nav-signup">Sign Up</button></Link>
      </div> 
      : <button className="nav-login" onClick={signout}>Logout</button>
    }
  </header>

)

export default NavBar;