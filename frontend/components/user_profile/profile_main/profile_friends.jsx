import React from 'react'
import FriendIndexItemContainer from './friend_index_item_container';

export const ProfileFriends = (props) => {
  let friends = props.friends.map(friend => {
    return <FriendIndexItemContainer friend={friend} key={friend.id}/>
  })
  return (
    <div>
      <h2>Friends</h2>
      <div className="friend-items-container">

        {friends}
      </div>
    </div>
  )
}