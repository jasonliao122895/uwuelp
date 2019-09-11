import React from 'react';
import { Link }  from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {
  let price = "";
  if (business.priceRange === 'Inexpensive') price = "$";
  if (business.priceRange === 'Moderate') price = "$$";
  if (business.priceRange === 'Pricey') price = "$$$";
  if (business.priceRange === 'Ultra High-End') price = "$$$$";
   return (
    <div>
      <div className="business-list-item">
         <img src="http://img1.ak.crunchyroll.com/i/spire1/8ad71330b958165e3b735054f4ff20211498090822_full.jpg" alt=""/>
        <div className="all-business-info">
          <div className="business-info">

            <div className="name-rating">
              <Link to={`/businesses/${business.id}`}>
                <h4><li>{business.name}</li></h4>
              </Link>
              <div>
                <h4>*****</h4>
                 <p>{`${price} - ${business.category} ${business.subCategory ? `, ${business.subCategory}` : ""}`}</p>
              </div>
            </div>
            <div className="phone-location">
              <p>{business.phone}</p>
              <span>{business.address}</span>
              <p>{business.city}</p>
            </div>

          </div>
          <p>
            This is a temporary fake review while I get my reviews setup.
            ᕦ(。U ω U。)ᕤ 
          </p>

        </div>
      </div>
    </div>
   )
}

export default BusinessIndexItem;

