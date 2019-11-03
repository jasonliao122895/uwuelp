class Api::FriendshipsController < ApplicationController

  def create
    @friendship = Friendship.new(friendships_params)
    
    return if current_user.id != params[:friendship][:inverse_friend_id].to_i

    if @friendship.save
      render :show
    else
      render json: @friendship.errors.full_messages, status: 422
    end

  end

  def remove
    @friendship = Friendship.find_by(friend_id: current_user.id, inverse_friend_id: params[:inverse_friend_id].to_i)
    @friendship.destroy
  end

  private

  def friendships_params
    params.require(:friendship).permit(:friend_id, :inverse_friend_id)
  end
end
