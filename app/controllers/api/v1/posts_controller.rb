class Api::V1::PostsController < ApplicationController
  before_action :authenticate_user!

  def create
    post = Post.create(status: post_params[:status], user: current_user)
    attachment_params.each do |attach|
      Attachment.create(asset: attach, post: post)
    end
    render json: {data: 'successfully uploaded'}
  end

  private

  def post_params
    params.permit(:status)
  end

  def attachment_params
    params.permit(attachment: [])[:attachment] || []
  end
end