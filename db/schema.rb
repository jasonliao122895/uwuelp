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

ActiveRecord::Schema.define(version: 2019_10_30_184209) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zipcode", null: false
    t.text "description", null: false
    t.string "open_hour", null: false
    t.string "closing_hour", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.string "phone", null: false
    t.string "website", null: false
    t.string "price_range", null: false
    t.string "parking", null: false
    t.string "takeout", null: false
    t.string "noise_level", null: false
    t.string "accept_card", null: false
    t.string "cater", null: false
    t.string "wifi", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "category", null: false
    t.string "sub_category"
    t.index ["address"], name: "index_businesses_on_address", unique: true
    t.index ["city"], name: "index_businesses_on_city"
    t.index ["name"], name: "index_businesses_on_name"
  end

  create_table "friend_requests", force: :cascade do |t|
    t.integer "requester_id", null: false
    t.integer "receiver_id", null: false
  end

  create_table "friendships", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "friend_id", null: false
    t.integer "inverse_friend_id", null: false
  end

  create_table "reactions", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "review_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "useful", default: false, null: false
    t.boolean "funny", default: false, null: false
    t.boolean "cool", default: false, null: false
    t.index ["author_id", "review_id"], name: "index_reactions_on_author_id_and_review_id", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "business_id", null: false
    t.text "body", null: false
    t.integer "rating", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["business_id"], name: "index_reviews_on_business_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.integer "zipcode", null: false
    t.integer "birth_month"
    t.integer "birth_day"
    t.integer "birth_year"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "city"
    t.string "state"
    t.text "hobbies"
    t.string "gender"
    t.string "website"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
