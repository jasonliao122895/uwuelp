import React from 'react';
import { withRouter } from 'react-router-dom';


class FindFriends extends React.Component {

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
            <button onClick={this.handleVisit.bind(this, friend.id)}>Visit Profile</button>
          </div>
        </div>
      )
    })
  }

  handleVisit(id) {
    const body = document.querySelector('body');
    body.classList.remove('modal-open')
    this.props.closeModal();
    this.props.history.push(`/users/${id}`)
  }

  

  handleClose(e) {
    e.preventDefault();
    const body = document.querySelector('body');
    body.classList.remove('modal-open')
    this.props.closeModal();
  }

  render() {

    if (this.props.friends.length < 1) return null;
    
    return (
      <div className="find-friends-container" >
        <h2>Find Friends</h2>
        <button className="modal-sess-close-but" onClick={this.handleClose.bind(this)}><img src={window.closeBut} alt="" /></button>
        {this.renderFriendItems()}
      </div>
    )
  }
}

export default withRouter(FindFriends);