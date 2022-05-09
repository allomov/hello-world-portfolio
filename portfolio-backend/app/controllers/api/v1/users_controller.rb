class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = User.all

    render_jsonapi collection: @users, serializer: ::UserSerializer
  end

  # GET /users/1
  def show
    render_jsonapi resource: @user, serializer: ::UserSerializer
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.fetch(:user, {})
    end
end
