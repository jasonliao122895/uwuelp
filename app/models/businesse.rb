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
#

class Businesse < ApplicationRecord
  validates :address, :city, :name, presence: true, uniqueness: true
  validates :state, :zipcode, :description, :open_hour, :closing_hour, :latitude, :longitude, :phone, presence: true
  validates :price_range, inclusion: { in: ['Inexpensive', 'Moderate', 'Pricey', 'Ultra High-End']}
  validates :takeout, :accept_card, :cater, :wifi, inclusion: { in: ['Yes', 'No']}
  validates :parking, inclusion: { in: ['Street', 'Meter', 'Parking Lot']}
  validates :noise_level, inclusion: { in: ['High', 'Low']}
  validates :category, inclusion: { in: ['Restaurant', 'BarberShop', 'Boba Shop', 'Clothing Store'] }
end
