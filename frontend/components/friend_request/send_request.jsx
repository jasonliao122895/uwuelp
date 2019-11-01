import React from 'react';
import { withRouter } from 'react-router-dom';

class FriendRequest extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      requester_id: this.props.currentUser.id,
      receiver_id: parseInt(this.props.match.params.id)
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendFriendRequest(this.state)
  }


  render() {
    return (
      <form className="send-friend-request-form">
        <button onClick={this.handleSubmit}>Add Friend</button>
      </form>
    )
  }
}

export default withRouter(FriendRequest);

