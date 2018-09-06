class Api::V1::FriendShipsController < ApplicationController
  before_action :authenticate_user!

  def create
    FriendShip.create(user: current_user, friend_id: params[:friend_id])
    render json: { status: :ok }
  end
end