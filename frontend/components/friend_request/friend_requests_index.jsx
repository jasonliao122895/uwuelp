import React from 'react';
import FriendRequestIndexItemContainer from './friend_request_index_item_container';

export default class FriendRequestIndex extends React.Component {


  render() {
    let requests;
    if (this.props.requests && this.props.requests.length > 0) {
      requests = this.props.requests.map(request => <FriendRequestIndexItemContainer key={request.id} request={request} />)
    }
    
    return (
      <div>
       {requests}
      </div>
    )
  }
}