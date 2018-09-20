# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_180_913_153_557) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'banners', force: :cascade do |t|
    t.string 'image'
    t.string 'position'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['position'], name: 'index_banners_on_position', unique: true
  end

  create_table 'creative_categories', force: :cascade do |t|
    t.string 'name'
    t.integer 'position'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.string 'badge'
    t.index ['name'], name: 'index_creative_categories_on_name', unique: true
  end

  create_table 'infos', force: :cascade do |t|
    t.string 'title'
    t.string 'asset'
    t.text 'description'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'partners', force: :cascade do |t|
    t.string 'name'
    t.string 'logo'
    t.string 'website'
    t.text 'description'
    t.integer 'position'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['position'], name: 'index_partners_on_position', unique: true
  end

  create_table 'product_shows', force: :cascade do |t|
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.integer 'position'
    t.string 'name'
    t.string 'image1'
    t.string 'image2'
    t.string 'image3'
    t.string 'image4'
    t.string 'image5'
    t.string 'image6'
    t.string 'image7'
    t.index ['position'], name: 'index_product_shows_on_position', unique: true
  end

  create_table 'projects', force: :cascade do |t|
    t.text 'description'
    t.string 'logo'
    t.integer 'position'
    t.string 'name'
    t.text 'challenge'
    t.text 'result'
    t.text 'summary'
    t.string 'image1'
    t.string 'image2'
    t.string 'image3'
    t.string 'image4'
    t.string 'image5'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.bigint 'creative_category_id'
    t.index ['creative_category_id'], name: 'index_projects_on_creative_category_id'
    t.index ['position'], name: 'index_projects_on_position', unique: true
  end

  create_table 'recruitments', force: :cascade do |t|
    t.string 'title'
    t.text 'description'
    t.text 'requirement'
    t.integer 'count'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.integer 'position'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'email', default: '', null: false
    t.string 'encrypted_password', default: '', null: false
    t.string 'reset_password_token'
    t.datetime 'reset_password_sent_at'
    t.datetime 'remember_created_at'
    t.integer 'sign_in_count', default: 0, null: false
    t.datetime 'current_sign_in_at'
    t.datetime 'last_sign_in_at'
    t.inet 'current_sign_in_ip'
    t.inet 'last_sign_in_ip'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['email'], name: 'index_users_on_email', unique: true
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
  end

  add_foreign_key 'projects', 'creative_categories'
end
