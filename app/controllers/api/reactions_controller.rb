class Api::ReactionsController < ApplicationController

  def index
    @reactions = Reaction.all
    render :index
  end

  def create
    @reaction = Reaction.new(reaction_params)
    @reaction.author_id = current_user.id

    if @reaction.save
      render :show
    else
      render json: @reaction.errors.full_messages, status: 422
    end

  end

  def update
    
  end

  def destroy
    @reaction = Reaction.where('author_id = ? AND review_id = ?', params[:review_id], current_user.id)
    @reaction.destroy
    render :show
  end

  private
  def reaction_params
    params.require(:reaction).permit(:reaction_type, :review_id)
  end

end
