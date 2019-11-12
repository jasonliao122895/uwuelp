import React from 'react';
import { Link } from 'react-router-dom';

export default class FindFriends extends React.Component {

  componentDidMount() {
    this.props.findFriends("")
  }

  renderFriendItems() {
    return this.props.friends.map(friend => {
      return (
        <div key={friend.id} className="find-friend-item">
          <img src={friend.profPic} alt=""/>
          <div className="find-friend-item-info">
            <p>{`${friend.firstName} ${friend.lastName}.`}</p>
            <Link onClick={this.props.closeModal.bind(this)} to={`/users/${friend.id}`}><button>Visit Profile</button></Link>
          </div>
        </div>
      )
    })
  }

  render() {
    
    return (
      <div className="find-friends-container" >
        <h2>Find Friends</h2>
        <button className="modal-sess-close-but" onClick={this.props.closeModal.bind(this)}><img src={window.closeBut} alt="" /></button>
        {this.renderFriendItems()}
      </div>
    )
  }
}