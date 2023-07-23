class TodosController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  def index
    @todos = Todo.all
    render json: @todos, status: :ok
  end

  def create
    @todo = Todo.create!(todo_params)
    render json: @todo, status: :created
  end

  def show
    @todo = Todo.find(params[:id])
    render json: @todo, status: :ok
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update!(todo_params)
    render json: @todo, status: :accepted
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    head :no_content
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :description, :completed)
  end

  def not_found
    render json: { error:  "Todo not found" }, status: :not_found
  end

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end

end



