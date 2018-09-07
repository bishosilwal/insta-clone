class FriendShip < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: 'User'
  after_create_commit :create_notification

  def create_notification
    Notification.create(user_id: self.user_id, receiver_id: self.friend_id, message: 'followed you')
  end
end
