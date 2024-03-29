# File Path : /app/controllers/users_controller.rb
# Changed by Ma Xiaohang(maffee)
# Controller File User
# Created by maffee on 16/10/9.

class UsersController < ApplicationController

  def new

  end


  def create
    @user = User.new(user_params)
    @user.permission=1

    @user.save
    redirect_to @user
  end

  def show
    @user = User.find(params[:id])
  end

  private
    def user_params
      params.require(:user).permit(:username, :password, :nickname, :contact)
    end
end
