class Api::V1::FriendsController < ApplicationController
  before_action :authenticate_user!
  def all_user
    user = User.all_except(current_user)
    render json: user
  end
end