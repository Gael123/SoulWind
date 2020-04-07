Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'weather/find_city'
  devise_for :users
  root to: 'pages#home'

  resources :users, only: [:index, :new, :create ] do
    member do
      post :follow
      post :unfollow
    end
  end
  resources :experiences, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
