class CreateBanners < ActiveRecord::Migration[5.1]
  def change
    create_table :banners do |t|
      t.string :image
      t.string :position

      t.timestamps
    end
    add_index :banners, :position, unique: true
  end
end
