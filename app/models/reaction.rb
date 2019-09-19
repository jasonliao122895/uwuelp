# == Schema Information
#
# Table name: reactions
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  review_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  useful     :boolean          default(FALSE), not null
#  funny      :boolean          default(FALSE), not null
#  cool       :boolean          default(FALSE), not null
#

class Reaction < ApplicationRecord
  validates :useful, :funny, :cool, inclusion: { in: [true, false] }

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :review,
  foreign_key: :review_id,
  class_name: :Review


end
