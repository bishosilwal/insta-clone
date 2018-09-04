class Api::V1::PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    @posts = current_user.posts.all
    render json: @posts
  end

  def create
    post = Post.create(status: post_params[:status], user: current_user)
    attachment_params.each do |attach|
      Attachment.create(asset: attach, post: post)
    end
    render json: {data: 'successfully uploaded', status: :ok}
  end

  private

  def post_params
    params.permit(:status)
  end

  def attachment_params
    params.permit(attachment: [])[:attachment].reject{|a| a.class !=ActionDispatch::Http::UploadedFile } || []
  end

end