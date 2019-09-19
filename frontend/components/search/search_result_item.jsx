import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultItem = ({ result }) => (
  <div className="search-result-item">
      <img src={result.profPic} alt="" />
      <div>
      <Link id="result-links" to={`/businesses/${result.id}`}>   
        <li>{result.name}</li>
      </Link>

      </div>
  
  </div>
)

export default SearchResultItem;