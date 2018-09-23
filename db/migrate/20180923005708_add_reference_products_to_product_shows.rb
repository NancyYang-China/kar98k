class AddReferenceProductsToProductShows < ActiveRecord::Migration[5.1]
  def change
    add_reference :product_shows, :creative_category, foreign_key: true
  end
end
