class AddIndexToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_index :businesses, :name
    add_index :businesses, :city
    add_index :businesses, :address, unique: true
  end
end
