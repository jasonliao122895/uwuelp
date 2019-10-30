# == Schema Information
#
# Table name: friendships
#
#  id                :bigint           not null, primary key
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  friend_id         :integer          not null
#  inverse_friend_id :integer          not null
#

class Friendship < ApplicationRecord
  
  belongs_to :friend,
  foreign_key: :friend_id,
  class_name: :User

  belongs_to :inverse_friend,
  foreign_key: :inverse_friend_id,
  class_name: :User

  after_create :create_inverse_friendship
  after_destroy :destory_inverse_friendship

  private

  def create_inverse_friendship
    friendship = Friendship.find_by(friend_id: inverse_friend_id, inverse_friend_id: friend_id)
    return if  friendship
    Friendship.create(friend_id: inverse_friend_id, inverse_friend_id: friend_id)
    request = FriendRequest.find_by(requester_id: friend_id, receiver_id: inverse_friend_id)
    request.destroy
  end

  def destory_inverse_friendship
    friendship = Friendship.find_by(friend_id: inverse_friend_id, inverse_friend_id: friend_id)
    return if !friendship
    friendship.destroy
  end


end
