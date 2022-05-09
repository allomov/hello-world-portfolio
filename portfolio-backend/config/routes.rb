Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :performances
      resources :users
    end
  end

  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
end
