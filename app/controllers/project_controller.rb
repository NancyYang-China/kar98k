class ProjectController < ApplicationController
  def index
    cate = -1
    cate = params[:cate] if params.present?

    render component: 'WorkPage', props: { projects: Project.all,
                                           creative_categories: CreativeCategory.all, cate: cate }
  end

  def show
    render component: 'ProjectShowPage', props: { project: Project.find(params[:id]) }
  end
end
