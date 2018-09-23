class RemoveIndexsOfPositions < ActiveRecord::Migration[5.1]
  def change
    remove_index :banners, :position
    remove_index :partners, :position
    remove_index :product_shows, :position
    remove_index :projects, :position
  end
end
