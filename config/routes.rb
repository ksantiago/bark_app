BarkApp::Application.routes.draw do
  get "dogs" => 'dogs#index'
  root to: 'users#index'
end
