class Api::V1::CommentsController < ApplicationController
  before_action :authenticate_user!

  def index
    @comments = Post.find(params[:post_id]).comments
    render json: @comments
  end

  def create
    post = Post.find(comment_params[:post_id])
    post.comments.build(message: comment_params[:message], user: current_user)
    post.save
    render json: { status: :ok }
  end

  private

  def comment_params
    params.permit(:message, :post_id)
  end
end