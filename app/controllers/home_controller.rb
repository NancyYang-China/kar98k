class HomeController < ApplicationController
  # before_action :authenticate_user!, :only => [:index]

  def index
    redirect_to "/maintenance.html"
    # render component: 'HomePage', props: { banners: Banner.all }
  end

  def about_us
    render component: 'AboutUsPage', props: { infos: Info.all, partners: Partner.all }
  end
end
