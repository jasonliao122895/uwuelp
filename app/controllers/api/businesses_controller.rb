class Api::BusinessesController < ApplicationController

  def index
    
    bounds = params[:filters][:bounds]
    near = params[:filters][:near]
    find = params[:filters][:find]
    if near.downcase == "sf"
      near = "san francisco"
    end

    if find.downcase == "sd"
      near = "san diego"
    end

    bound_filter = Businesse.in_bounds(bounds) if bounds
  
    
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
     
    render :index
  end

  def show
    @businesse = Businesse.find_by(id: params[:id])
    render :show
  end

  def search 
    query = params[:query]
    if query.length >= 2 
      @businesses = Businesse.where('lower(name) LIKE ?', "%#{query.downcase}%" )
      @businesses = @businesses[0..4]
      render :index
    else
      @businesses = []
      render :index
    end
  end

end

