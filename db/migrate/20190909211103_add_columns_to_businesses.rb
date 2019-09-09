class AddColumnsToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :category, :string, null: false
    add_column :businesses, :sub_category, :string
  end
end
