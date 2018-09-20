class AddBageToCreativeCategories < ActiveRecord::Migration[5.1]
  def change
    add_column :creative_categories, :badge, :string
  end
end
