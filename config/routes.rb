Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  root to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :project, only: [:index, :show]
  get :about_us, to: 'home#about_us', as: :about_us
  get :contact_us, to: 'contact_us#index', as: :contact_us
  get :recruitment, to: 'recruitment#index', as: :recruitment
end
