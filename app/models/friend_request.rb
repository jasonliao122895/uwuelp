# == Schema Information
#
# Table name: friend_requests
#
#  id           :bigint           not null, primary key
#  requester_id :integer          not null
#  receiver_id  :integer          not null
#

class FriendRequest < ApplicationRecord

  belongs_to :requester,
  foreign_key: :requester_id,
  class_name: :User

  belongs_to :receiver,
  foreign_key: :receiver_id,
  class_name: :User

  validate :not_self
  validate :not_pending
  validate :not_friends

  private

  def not_self
    errors.add(:receiver_id, "cannot equal to requester_id") if requester_id == receiver_id
  end

  def not_friends
    user = User.find_by(id: requester_id)
    friend = User.find_by(id: receiver_id)
    errors.add(:receiver_id, "already friends") if user.friends.include?(friend)
  end

  def not_pending
    user = User.find_by(id: requester_id)
    friend = User.find_by(id: receiver_id)
    errors.add(:receiver_id, "already added friend") if user.pending_friends.include?(friend)
  end

end
