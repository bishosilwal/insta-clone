class Like < ApplicationRecord
  belongs_to :user
  belongs_to :post
  enum status: { like: 1, dislike: 0 }
end
