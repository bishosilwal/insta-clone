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

  #friendship relation
  has_many :friend_ships
  has_many :friends, through: :friend_ships
  has_many :inverse_friend_ships, class_name: 'FriendShip', foreign_key: 'friend_id'
  has_many :inverse_friends, through: :inverse_friend_ships, source: :user

  #friend request relation
  has_many :friend_request
  has_many :requests, through: :friend_request
  has_many :inverse_friend_request, class_name: 'FriendRequest', foreign_key: 'request_id'
  has_many :inverse_request, through: :inverse_friend_request, source: :user

  def self.all_except(user)
    ids = user.friends.pluck(:id) << user.id
    where.not(id: ids)
  end

  def all_post
    posts = []
    posts << self.posts
    friends.each do |friend|
      friend_post = friend.posts
      posts << friend_post
    end
    posts.flatten!
  end
end
