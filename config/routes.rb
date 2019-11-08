Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show, :create] do
      resources :reviews, only: [:index, :create, :update, :destroy] do
        resources :reactions, only: [:index]
      end
    end
    resources :friend_requests, only: [:create, :destroy]
    resources :friendships, only: [:create]
    resources :reactions, only: [:show, :create, :destroy, :update]
    get '/businesses/search/:query', to: 'businesses#search'
    get '/businesses/get/:city', to: 'businesses#gather'
    get '/friendships/:inverse_friend_id', to: 'friendships#remove'
  end
end
