class Api::V1::NotificationsController < ApplicationController
  before_action :authenticate_user!
  after_action :set_status_read, only: [:index]
  def index
    notifications = current_user.notifications.unread
    render json: notifications
  end

  private

  def set_status_read
    current_user.notifications.set_status_read
  end
end