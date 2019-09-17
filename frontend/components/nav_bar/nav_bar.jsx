import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileContainer from './user_profile_container';
import SearchContainer from '../search/search_container';

const NavBar = () => (
  <header className="nav-bar">
    <div className="logo">
      <Link to="/">
        <span><h3>UwU</h3></span>
        <h1>elp</h1>
      </Link>
    </div>
    
    <div>
      <div className="nav-search-bar">
        <SearchContainer />

      </div>
    </div>
    
    <UserProfileContainer />
  </header>

)

export default NavBar;