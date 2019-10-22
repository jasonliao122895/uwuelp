import React from 'react';

export const ProfileOverview = (props) => {
  let createdDate = new Date(props.user.createdAt);
  createdDate = createdDate.toDateString().split(' ')
  let month = createdDate[1];
  let year = createdDate[3];
  
  return (
    <div className="profile-overview-container">
      <div className="profile-overview-main">
        <div className="profile-overview-notifications">
          <h2>Notifications</h2>
          <p>No new friend requests or complements at this time.</p>
        </div>
        <div className="profile-overview-activity">
          <h2>Recent Activity</h2>
          <p>We don't have any recent activity for you right now.</p>
        </div>
      </div>
      <div className="profile-overview-side">
        <h3>{`About ${props.user.firstName} ${props.user.lastName}.`}</h3>
        <p className="profile-side-headers">Location</p>
        <p>{`${props.user.city}, ${props.user.state}`}</p>
        <br/>
        <p className="profile-side-headers">Yelping Since</p>
        <p>{`${month} ${year}`}</p>
        <br/>
        <p className="profile-side-headers">Things I Love</p>
        <p>{props.user.hobbies}</p>
        <br/>
        <a href={`http://${props.user.website}`}>
          {props.user.website}
        </a>
      </div>
    </div>
  )
}