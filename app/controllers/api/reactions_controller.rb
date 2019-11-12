class Api::ReactionsController < ApplicationController

  def index
    @reactions = Review.find_by(id: params[:review_id]).reactions
    render :index
  end

  def show
    @reaction = Reaction.find_by(id: params[:id])
    render :show
  end

  def create

    @reaction = Reaction.new(reaction_params)
    @reaction.author_id = current_user.id
    @reaction.review_id = params[:reaction][:review_id].to_i
   
    if @reaction.save
      render :show
    else
      render json: @reaction.errors.full_messages, status: 422
    end

  end

  def update
    @reaction = Reaction.find_by(id: params[:id])
    if @reaction.update_attributes(reaction_params)
      render :show
    else
      render json: @reaction.errors.full_messages, status: 422
    end

  end

  def destroy
    @reaction = Reaction.find_by(id: params[:id])
    @reaction.destroy
    render :show
  end

  private
  def reaction_params
    params.require(:reaction).permit(:reaction_type, :useful, :funny, :cool)
  end

end
