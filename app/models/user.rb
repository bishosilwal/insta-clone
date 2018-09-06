# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :friend_ships
  has_many :friends, through: :friend_ships
  has_many :inverse_friend_ships, class_name: 'FriendShip', foreign_key: 'friend_id'
  has_many :inverse_friends, through: :inverse_friend_ships, source: :user
  
  scope :all_except, ->(user) { where.not(id: user) }
end
