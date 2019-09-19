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

require 'test_helper'

class ReactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
