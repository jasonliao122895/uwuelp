class Api::ReviewsController < ApplicationController

  def index
    
    @reviews = Businesse.find_by(id: params[:business_id]).reviews
    
    render :index
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    
    if @review.save
      render :show
    else
      # debugger
      render json: @review.errors.full_messages, status: 422
    end

  end

  def update
    @review = Review.find_by(id: params[:id])
    
    return if current_user.id != @review.author_id
   
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def destroy
    
    @review = Review.find_by(id: params[:id])
    return if current_user.id != @review.author_id
    
    @review.destroy
    render :show
  end


  private 
  
  def review_params
    params.require(:review).permit(:rating, :body, :business_id, :author_id, :id)
  end
end
