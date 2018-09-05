class CommentSerializer < ActiveModel::Serializer
  attributes :id, :message
  belongs_to :user
  
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email
  end
end
