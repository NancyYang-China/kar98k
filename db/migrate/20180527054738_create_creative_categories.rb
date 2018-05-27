class CreateCreativeCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :creative_categories do |t|
      t.string :name
      t.integer :position, unique: true

      t.timestamps
    end
    add_index :creative_categories, :name, unique: true
  end
end
