class EditFriendshipTable < ActiveRecord::Migration[5.2]
  def change
    add_column :friendships, :friend_id, :integer, null: false
    add_column :friendships, :inverse_friend_id, :integer, null: false
    remove_column :friendships, :requester_id
    remove_column :friendships, :receiver_id
  end
end
