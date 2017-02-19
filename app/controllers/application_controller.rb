# File Path : /app/controllers/application_controller.rb
# Changed by Ma Xiaohang(maffee)
# Controller File Global
# Created by maffee on 16/10/9.

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
