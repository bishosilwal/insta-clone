class NotificationSerializer < ActiveModel::Serializer
  attributes :id, :message
  belongs_to :creator, class_name: 'User', foreign_key: 'user_id'
  belongs_to :receiver, class_name: 'User', foreign_key: 'receiver_id'
end
