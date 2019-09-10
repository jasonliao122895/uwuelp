class Api::BusinessesController < ApplicationController

  def index
    @businesses = Businesse.all
    render :index
  end

  def show
    @businesse = Businesse.find_by(id: params[:id])
    render :show
  end

end
