Rails.application.routes.draw do
  get '/:name', to: 'home#index'
  root 'home#index'

end
