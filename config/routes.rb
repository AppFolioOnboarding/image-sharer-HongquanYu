Rails.application.routes.draw do
  resources :images, only: %i[show new create index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#home'
end
