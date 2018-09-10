Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/v1/auth'
  get '/:name', to: 'home#index'
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:create, :index] do
        resources :comments, only: [:index, :create]
        resources :likes, only: [:index, :create, :destroy]
      end
       resources :friend_requests, only: [:create]
       resources :friend_ships, only: [:create]
       resources :notifications, only: [:index]
       resources :users, only: [:show]
       resources :attachments, only: [:index]
       get '/friends/suggestion', to: 'users#suggestion'
       post '/users/avatar', to: 'users#change_avatar'
    end
  end

end
