import React from 'react';
import { Link }  from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {
  let price = "";
  if (business.priceRange === 'Inexpensive') price = "$";
  if (business.priceRange === 'Moderate') price = "$$";
  if (business.priceRange === 'Pricey') price = "$$$";
  if (business.priceRange === 'Ultra High-End') price = "$$$$";

  let rating = business.avgRating;
  let ratingUrl;
  if (rating < 1.5) ratingUrl = window.one;
  if (rating < 2.0 && rating >= 1.5) ratingUrl = window.oneHalf;
  if (rating < 2.5 && rating >= 2.0) ratingUrl = window.two;
  if (rating < 3 && rating >= 2.5) ratingUrl = window.twoHalf;
  if (rating < 3.5 && rating >= 3.0) ratingUrl = window.three;
  if (rating < 4 && rating >= 3.5) ratingUrl = window.threeHalf;
  if (rating < 4.5 && rating >= 4.0) ratingUrl = window.four;
  if (rating < 5 && rating >= 4.5) ratingUrl = window.fourHalf;
  if (rating === 5) ratingUrl = window.five;
  
   return (
    <div>
      <div className="business-list-item">
         <Link to={`/businesses/${business.id}`}>
          <img src={business.profPic} alt=""/>
        </Link>
        <div className="all-business-info">
          <div className="business-info">

            <div className="name-rating">
              <Link to={`/businesses/${business.id}`}>
                <h4><li>{business.name}</li></h4>
              </Link>
              <div>
                {rating > 0 ? 
                   <img id="index-avg-rating" src={ratingUrl} alt=""/> 
                   
                : <p>No Rating</p>}
                 <span>{`${business.numReviews} Reviews`}</span> 
                 <p>{`${price} • ${business.category} ${business.subCategory ? `, ${business.subCategory}` : ""}`}</p>
              </div>
            </div>
            <div className="phone-location">
              <p>{business.phone}</p>
              <span>{business.address}</span>
              <p>{business.city}</p>
            </div>

          </div>
          <p>
            {business.review !== undefined && business.review !== null ? business.review.body : "No Reviews"}
          </p>

        </div>
      </div>
    </div>
   )
}

export default BusinessIndexItem;

