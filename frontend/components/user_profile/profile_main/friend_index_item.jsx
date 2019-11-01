import React from 'react';
import { withRouter } from 'react-router-dom';


class FriendIndexItem extends React.Component {


  componentDidMount() {
    this.props.fetchUser(this.props.friend.id)
  }



  render() {
    
    let { friendItem } = this.props;
    if (!friendItem) return null;
    return (
      <div className="friend-item" >
        <img src={friendItem.profPic} alt=""/>
        <div>
          <p>{`${friendItem.firstName} ${friendItem.fullLastName}`}</p>
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