# == Schema Information
#
# Table name: businesses
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zipcode      :integer          not null
#  description  :text             not null
#  open_hour    :string           not null
#  closing_hour :string           not null
#  latitude     :float            not null
#  longitude    :float            not null
#  phone        :string           not null
#  website      :string           not null
#  price_range  :string           not null
#  parking      :string           not null
#  takeout      :string           not null
#  noise_level  :string           not null
#  accept_card  :string           not null
#  cater        :string           not null
#  wifi         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  category     :string           not null
#  sub_category :string
#

class Businesse < ApplicationRecord
  validates :address, :phone, presence: true, uniqueness: true
  validates :state, :zipcode, :city, :description, :open_hour, :closing_hour, :latitude, :longitude, :name, presence: true
  validates :price_range, inclusion: { in: ['Inexpensive', 'Moderate', 'Pricey', 'Ultra High-End']}
  validates :takeout, :accept_card, :cater, :wifi, inclusion: { in: ['Yes', 'No']}
  validates :parking, inclusion: { in: ['Street', 'Meter', 'Parking Lot']}
  validates :noise_level, inclusion: { in: ['High', 'Low']}
  validates :category, inclusion: { in: ['Restaurant', 'Barber Shop', 'Boba Shop', 'Clothing Store'] }

  has_many :reviews,
  foreign_key: :business_id,
  class_name: :Review

  has_one_attached :prof_pic

  has_many_attached :food_pics


  def self.in_bounds(bounds) 
    return if bounds == nil
    north_bound = bounds["northEast"]["lat"].to_f

    south_bound = bounds["southWest"]["lat"].to_f
    east_bound = bounds["northEast"]["lng"].to_f
    west_bound = bounds["southWest"]["lng"].to_f
    
    Businesse.where('longitude <= ? and longitude >= ?', east_bound, west_bound).where('latitude <= ? and latitude >= ?', north_bound, south_bound) 
  end

  def self.in_location(location)
    Businesse.where('lower(city) LIKE ? or lower(state) LIKE ? ', "%#{location.downcase}%", "%#{location.downcase}%" )
  end

  def self.find_business(query)
    Businesse.where('lower(sub_category) LIKE ? or lower(category) LIKE ? or lower(name) LIKE ? ', "%#{query[0..5].downcase}%", "%#{query[0..5].downcase}%", "%#{query[0..5].downcase}%")
  end

end


# {
#     "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
#     "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
#   }
