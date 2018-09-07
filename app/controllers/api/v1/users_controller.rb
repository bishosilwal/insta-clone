class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  def suggestion
    user = User.all_except(current_user)
    render json: user
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def change_avatar
    current_user.update(avatar: params[:avatar])
    render json: current_user
  end
end