class AddImagesToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :image6, :string
    add_column :projects, :image7, :string
    add_column :projects, :image8, :string
    add_column :projects, :image9, :string
  end
end
