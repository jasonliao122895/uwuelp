import React from 'react';
import FriendRequestIndex from '../../friend_request/friend_requests_index';
import RecentActivityContainer from './recent_activity_container';

export default class ProfileOverview extends React.Component {

  

  render() {
    let createdDate = new Date(this.props.user.createdAt);
    createdDate = createdDate.toDateString().split(' ')
    let month = createdDate[1];
    let year = createdDate[3];

    let reviews = this.props.user.reviews;
    if (!reviews) return null;
    reviews = reviews.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    reviews = reviews.slice(0, 4);

    let activities = reviews.map(review => {
      return <RecentActivityContainer key={review.id} review={review}/>
    })


    return (
      <div className="profile-overview-container">
        <div className="profile-overview-main">
          <div className="profile-overview-notifications">
            {this.props.currentUser && this.props.currentUser.id === this.props.user.id ? <h2>Notifications</h2> : "" }
            {this.props.currentUser && this.props.currentUser.id === this.props.user.id && this.props.user.friendRequests && this.props.user.friendRequests.length < 1 ? 
            <p>No new friend requests or complements at this time.</p> : "" }
            {this.props.currentUser && this.props.currentUser.id === this.props.user.id ?
            <FriendRequestIndex requests={this.props.user.friendRequests} /> : ""
            }
          </div>
          <div className="profile-overview-activity">
            <h2>Most Recent Activity</h2>
            {reviews.length === 0 ? <p>We don't have any recent activity for you right now.</p> : activities}
          </div>
        </div>
        <div className="profile-overview-side">
          <h3>{`About ${this.props.user.firstName} ${this.props.user.lastName}.`}</h3>
          <p className="profile-side-headers">Location</p>
          <p>{`${this.props.user.city}, ${this.props.user.state}`}</p>
          <br/>
          <p className="profile-side-headers">Yelping Since</p>
          <p>{`${month} ${year}`}</p>
          <br/>
          <p className="profile-side-headers">Things I Love</p>
          <p>{this.props.user.hobbies}</p>
          <br/>
          <a href={`http://${this.props.user.website}`}>
            {this.props.user.website}
          </a>
        </div>
      </div>
    )
  }
}