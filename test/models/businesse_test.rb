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

require 'test_helper'

class BusinesseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
