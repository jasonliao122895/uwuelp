class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      login(@user)
      # render json: @user
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private
  def user_params
    params.require(:user).permit(
      :email, :password, :first_name, :last_name, :zipcode, :birth_month, :birth_day, :birth_year
    )
  end

end
