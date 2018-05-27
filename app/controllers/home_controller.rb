class HomeController < ApplicationController
  # before_action :authenticate_user!, :only => [:index]

  def index
    render component: 'HomePage', props: { banners: Banner.all }
  end

  def works
    render component: 'WorkPage', props: { projects: Project.all, creative_categories: CreativeCategory.all }
  end

  def about_us
    render component: 'AboutUsPage', props: { infos: Info.all, partners: Partner.all }
  end
end
