class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.text :description
      t.string :logo
      t.integer :position

      t.string :name
      t.text :challenge
      t.text :result
      t.text :summary
      t.string :image1
      t.string :image2
      t.string :image3
      t.string :image4
      t.string :image5

      t.timestamps
    end

    add_index :projects, :position, unique: true
    add_reference :projects, :creative_category, foreign_key: true
  end
end
