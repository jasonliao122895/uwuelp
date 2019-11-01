import React from 'react';

export default class FriendRequestIndexItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      friend_id: this.props.request.requester_id,
      inverse_friend_id: this.props.request.receiver_id
    } 
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    this.props.fetchUser(this.props.request.requester_id);
  }

  handleDelete(e) {
    e.preventDefault();
    let that = this;
    this.props.rejectFriendRequest(this.props.request.id)
      .then(() => {
        that.props.fetchUser(that.props.request.receiver_id);
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    let that = this;
    this.props.addFriend(this.state)
      .then(() => {
        that.props.fetchUser(that.props.request.receiver_id);
      })
  }


  render() {
    
    return (
      <div className="friend-request-item-container">
        <div className="friend-request-item">
          <img src={this.props.requester.profPic}/>
          <div className="friend-requester-info">
            <p>{`${this.props.requester.firstName} ${this.props.requester.fullLastName}`}</p>
            <p>{`${this.props.requester.city}, ${this.props.requester.state}`}</p>
            <p>{this.props.requester.gender}</p>
          </div>
          <div className="friend-request-item-buttons">
            <button onClick={this.handleSubmit} >Accept</button>
            <button onClick={this.handleDelete} >Decline</button>
          </div>
        </div>
      </div>
    )
  }
}