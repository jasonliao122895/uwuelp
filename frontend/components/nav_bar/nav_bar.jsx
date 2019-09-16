import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileContainer from './user_profile_container';

const NavBar = () => (
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
    <button className="nav-search-but">
      <span role="img" aria-label="search">🔍</span>
    </button>
    
    <UserProfileContainer />
  </header>

)

export default NavBar;