class ProjectController < ApplicationController
  def index
    cate = -1
    cate = params[:cate] if params.present?

    render component: 'WorkPage', props: { projects: Project.all,
                                           creative_categories: CreativeCategory.all, cate: cate }
  end

  def show
    project = Project.find(params[:id])

    render component: 'ProjectShowPage', props: { project: project.as_json.merge(category: project.creative_category.name) }
  end
end
