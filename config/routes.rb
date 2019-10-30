Rails.application.routes.draw do
  root 'application#home'

  resources :images, only: %i[show new create index destroy]

  resources :feedbacks, only: [:new]

  namespace :api do
    resource :feedbacks, only: [:create]
  end
end
