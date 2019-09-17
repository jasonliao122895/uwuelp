class Api::BusinessesController < ApplicationController

  def index
    
    bounds = params[:filters][:bounds]
    near = params[:filters][:near]
    find = params[:filters][:find]
    
    bound_filter = Businesse.in_bounds(bounds) if bounds
  
    # debugger
    if near != "" && find != ""
      @businesses = Businesse.in_location(near)
      @finds = Businesse.find_business(find)
      @businesses = @businesses.select { |business| @finds.include?(business) }
      @businesses = @businesses.select { |business| bound_filter.include?(business) } if !bound_filter.nil?
    elsif near && find == ""
      @businesses = Businesse.in_location(near) 
      @businesses = @businesses.select { |business| bound_filter.include?(business) } if !bound_filter.nil?
    elsif find && near == ""
      @businesses = Businesse.find_business(find) 
      @businesses = @businesses.select { |business| bound_filter.include?(business) } if !bound_filter.nil?
    end
      # debugger
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