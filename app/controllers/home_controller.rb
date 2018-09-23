class HomeController < ApplicationController
  # before_action :authenticate_user!, :only => [:index]

  def index
    # redirect_to "/maintenance.html"
    product_shows = ProductShow.all.map do |ps|
      ids = Project.where(creative_category: ps.creative_category_id).map(&:id)
      ps.as_json.merge(ids: ids)
    end

    render component: 'HomePage', props: { banners: Banner.all, product_shows: product_shows }
  end

  def about_us
    render component: 'AboutUsPage', props: { infos: Info.all, partners: Partner.all }
  end
end
