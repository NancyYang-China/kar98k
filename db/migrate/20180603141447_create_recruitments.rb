class CreateRecruitments < ActiveRecord::Migration[5.1]
  def change
    create_table :recruitments do |t|
      t.string :title
      t.text :description
      t.text :requirement
      t.integer :count

      t.timestamps
    end

    add_column :recruitments, :position, :integer, unique: true
  end
end
