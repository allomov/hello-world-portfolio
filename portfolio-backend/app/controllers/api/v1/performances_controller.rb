class Api::V1::PerformancesController < ApplicationController
  before_action :set_performance, only: %i[ show update destroy ]

  # GET /performances
  def index
    @performances = Performance.all
    @performances = @performances.where(user_id: params[:user_id]) if params.key?(:user_id)

    render_jsonapi collection: @performances, serializer: ::PerformanceSerializer
  end

  # GET /performances/1
  def show
    render_jsonapi resource: @performance, serializer: ::PerformanceSerializer
  end

  # POST /performances
  def create
    @performance = Performance.new(performance_params)

    if @performance.save
      render_jsonapi resource: @performance, serializer: ::PerformanceSerializer
    else
      render json: @performance.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /performances/1
  def update
    if @performance.update(performance_params)
      render_jsonapi resource: @performance, serializer: ::PerformanceSerializer
    else
      render json: @performance.errors, status: :unprocessable_entity
    end
  end

  # DELETE /performances/1
  def destroy
    @performance.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_performance
      @performance = Performance.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def performance_params
      params.permit(:user_id, :title, :recording)
    end
end
