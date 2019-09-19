# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  business_id :integer          not null
#  body        :text             not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord

  validates :body, presence: true
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5] }

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :business,
  foreign_key: :business_id,
  class_name: :Businesse

  has_many :reactions,
  foreign_key: :review_id,
  class_name: :Reaction

  
end
