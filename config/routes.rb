Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/v1/auth'
  get '/:name', to: 'home#index'
  root 'home#index'

  namespace :api do
    namespace :v1 do 
      resources :posts , only: [:create, :index] do 
        resources :comments, only: [:index, :create]
      end
    end
  end

end
