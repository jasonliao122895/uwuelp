class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.text :description, null: false
      t.string :open_hour, null: false
      t.string :closing_hour, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :phone, null: false
      t.string :website, null: false
      t.string :price_range, null: false
      t.string :parking, null: false
      t.string :takeout, null: false
      t.string :noise_level, null: false
      t.string :accept_card, null: false
      t.string :cater, null: false
      t.string :wifi, null: false
      t.timestamps
    end
  end
end
