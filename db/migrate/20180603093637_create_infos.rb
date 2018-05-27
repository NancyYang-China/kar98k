class CreateInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :infos do |t|
      t.string :title
      t.string :asset
      t.text :description

      t.timestamps
    end
  end
end
