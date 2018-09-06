class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    user = User.all_except(current_user)
    render json: user
  end
end