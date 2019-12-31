Rails.application.routes.draw do
  # resources :teachers
  resources :students, only: [:show, :new, :index, :create]
  root to: "students#index"

  get '/login', to: "auth#login"
  post '/login', to: "auth#verify"

  get '/signup', to: "teachers#new"
  post '/signup', to: "teachers#create"
end
