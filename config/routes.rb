Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/v1/auth'
  get '/:name', to: 'home#index'
  root 'home#index'

end
