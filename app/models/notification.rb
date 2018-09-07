class Notification < ApplicationRecord
  belongs_to :creator, class_name: 'User', foreign_key: 'user_id'
  belongs_to :receiver, class_name: 'User', foreign_key: 'receiver_id'
  enum status: { read: 1, unread: 0 }
  scope :unread, -> { where(status: :unread) }

  def self.set_status_read
    update_all(status: :read)
  end
end
