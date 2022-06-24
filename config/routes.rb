Rails.application.routes.draw do
  devise_for :users
  root to: "characters#index"
  resources :users, only: [:edit, :update]
  resources :characters
  resources :past_topics, only: :update
  resources :future_topics, only: :update
end
