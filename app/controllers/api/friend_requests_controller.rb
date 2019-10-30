class Api::FriendRequestsController < ApplicationController
  
  def create
    @friend_request = FriendRequest.new(friend_request_params)

    if @friend_request.save
      render :show
    else
      render json: @friend_request.errors.full_messages, status: 422
    end

  end

  def destroy
    @friend_request = FriendRequest.find_by(id: params[:id])
    return if current_user.id != @friend_request.requester_id 
    @friend_request.destroy
    render :show
  end


  private
  def friend_request_params
    params.require(:friend_request).permit(:requester_id, :receiver_id)
  end

end
