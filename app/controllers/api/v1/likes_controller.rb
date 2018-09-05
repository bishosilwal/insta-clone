class Api::V1::LikesController < ApplicationController
  before_action :authenticate_user!

  def index
    post = Post.find(params[:post_id])
    likes = post.likes
    render json: likes
  end

  def create
    post = Post.find(params[:post_id])
    like = post.likes.build(post_id: params[:post_id], user: current_user, status: 'like')
    like.save
    render json: like
  end

  def destroy
    like = Like.find(params[:id])
    like.delete
    render json: like
  end
end