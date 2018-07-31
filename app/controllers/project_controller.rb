class ProjectController < ApplicationController
  def index
    render component: 'WorkPage', props: { projects: Project.all, creative_categories: CreativeCategory.all }
  end

  def show
    render component: 'ProjectShowPage', props: { project: Project.find(params[:id]) }
  end
end
