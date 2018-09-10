class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :avatar
  has_many :friends
  has_many :inverse_friends
  has_many :posts

  class PostSerializer < ActiveModel::Serializer
    attributes :id
  end
end