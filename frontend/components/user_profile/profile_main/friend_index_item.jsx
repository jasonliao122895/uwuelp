import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class FriendIndexItem extends React.Component {


  componentDidMount() {
    this.props.fetchUser(this.props.friend.id)
  }



  render() {
    
    let { friendItem } = this.props;
    if (!friendItem) return null;
    return (
      <div className="friend-item" >
        <Link to={`/users/${friendItem.id}`}>
          <img src={friendItem.profPic} alt=""/>
        </Link>
        <div>
          <Link to={`/users/${friendItem.id}`}>
            <p>{`${friendItem.firstName} ${friendItem.fullLastName}`}</p>
          </Link>
          <p>{`${friendItem.city}, ${friendItem.state}`}</p>
          {friendItem.gender ? 
            <p>{`${friendItem.gender}`}</p> : ""
          }
        </div>
      </div>
    )
  }
}

export default withRouter(FriendIndexItem)