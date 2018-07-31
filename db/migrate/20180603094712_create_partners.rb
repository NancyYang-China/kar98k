class CreatePartners < ActiveRecord::Migration[5.1]
  def change
    create_table :partners do |t|
      t.string :name
      t.string :logo
      t.string :website
      t.text :description
      t.integer :position

      t.timestamps
    end

    add_index :partners, :position, unique: true
  end
end
