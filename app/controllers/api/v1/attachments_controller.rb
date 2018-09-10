class Api::V1::AttachmentsController < ApplicationController
  before_action :authenticate_user!
  def index
    attachments = Attachment.get_current_user_attachments(current_user)
    render json: attachments
  end
end