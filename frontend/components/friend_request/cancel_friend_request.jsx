import React from 'react';
import { withRouter } from 'react-router-dom';

class CancelFriendRequest extends React.Component {

  handleCancel(e) {
    e.preventDefault();
    let that = this;
    this.props.cancelFriendRequest(this.props.match.params.id)
      .then(() => {
        that.props.fetchUser(that.props.match.params.id)
      })
  }


  render() {
    return (
      <button className="cancel-friend-but" onClick={this.handleCancel.bind(this)}>Cancel Request</button>
    )
  }
}


export default withRouter(CancelFriendRequest);