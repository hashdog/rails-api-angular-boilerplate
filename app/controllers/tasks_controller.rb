class TasksController < ApplicationController
	def index
		@tasks = Task.all
		render json: @tasks
	end

	def create
		@task = Task.create(task_params)
		render json: @task
	end

	def destroy
		Task.find(params[:id]).delete
	end

	private

	def task_params
		params.require(:task).permit(:title, :ready)
	end
end