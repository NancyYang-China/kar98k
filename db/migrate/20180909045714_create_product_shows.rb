class CreateProductShows < ActiveRecord::Migration[5.1]
  def change
    create_table :product_shows do |t|
      t.timestamps
      t.integer :position

      t.string :name
      t.string :image1
      t.string :image2
      t.string :image3
      t.string :image4
      t.string :image5
      t.string :image6
      t.string :image7
    end

    add_index :product_shows, :position, unique: true
  end
end
