require 'open-uri'

class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
    render '/api/users/show'
  end

  def create
    @user = User.new(user_params)
    file = open('https://uwuelp-seeds.s3-us-west-1.amazonaws.com/userprofpics/default.jpg')
    @user.prof_pic.attach(io: file, filename: "#{@user.email}.jpg")
    
    if @user.save      
      login(@user)
      # render json: @user
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def update
    @user = User.find_by(id: params[:id])
    
    if @user.update_attributes(user_params)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :email, :password, :first_name, :last_name, :zipcode, :birth_month, :birth_day, :birth_year, :prof_pic, :city, :state, :hobbies, :website, :gender
    )
  end

end
