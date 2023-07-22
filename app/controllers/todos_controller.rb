class TodosController < ApplicationController

  def index
    @todos = Todo.all
    render json: @todos, status: :ok
  end

  def create
    @todo = Todo.create!(todo_params)
    render json: @todo, status: :created
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    head: no_content
  end
  
  private

  def todo_params
    params.require(:todo).permit(:title, :description, :completed)
  end
end



