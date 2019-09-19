# == Schema Information
#
# Table name: reactions
#
#  id            :bigint           not null, primary key
#  author_id     :integer          not null
#  review_id     :integer          not null
#  reaction_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Reaction < ApplicationRecord
  validates :reaction_type, presence: true, inclusion: { in: ['Useful', 'Funny', 'Cool'] }
end
