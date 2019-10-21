# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  zipcode         :integer          not null
#  birth_month     :integer
#  birth_day       :integer
#  birth_year      :integer
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :first_name, :last_name, :zipcode, :password_digest, presence: true
  validates :session_token, :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates_format_of :zipcode,
                  with: /\A\d{5}-\d{4}|\A\d{5}\z/,
                  message: "must be valid"

  attr_reader :password
  after_initialize :ensure_session_token

  has_one_attached :prof_pic

  has_many :reviews,
  foreign_key: :author_id,
  class_name: :Review

  has_many :reactions,
  foreign_key: :author_id,
  class_name: :Reaction
  

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end


end
