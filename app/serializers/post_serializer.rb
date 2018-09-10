class PostSerializer < ActiveModel::Serializer
  attributes :id, :status

  belongs_to :user
  has_many :attachments

  class AttachmentSerializer < ActiveModel::Serializer
    attributes :id, :asset, :asset_content_type

    def asset
      self.object.asset.url
    end
  end

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :avatar

    def avatar
      self.object.avatar.url
    end
  end
end