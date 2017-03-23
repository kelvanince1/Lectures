Rails.application.routes.draw do
  resources :todos do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  collection do
    get 'completed'
    get 'incomplete'
  end
  end
end
