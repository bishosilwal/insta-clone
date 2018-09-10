class AttachmentSerializer < ActiveModel::Serializer
  attributes :id, :asset, :asset_content_type
  belongs_to :post
  def asset
    self.object.asset.url
  end

  class PostSerializer < ActiveModel::Serializer
    attributes :id, :likes, :comments

    def likes
      self.object.likes.count
    end

    def comments
      self.object.comments.count
    end
  end
end
