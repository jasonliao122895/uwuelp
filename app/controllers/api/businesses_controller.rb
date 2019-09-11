class Api::BusinessesController < ApplicationController

  def index
    # @businesses = Businesse.all
    @businesses = Businesse.in_bounds(params[:filters][:bounds])
    
    render :index
  end

  def show
    @businesse = Businesse.find_by(id: params[:id])
    render :show
  end

end

# {
#     northEast: { lat: 37.80971, lng: -122.39208 },
#     southWest: { lat: 37.74187,  lng: -122.47791 }
#   }