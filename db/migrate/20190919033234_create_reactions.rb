class CreateReactions < ActiveRecord::Migration[5.2]
  def change
    create_table :reactions do |t|
      t.integer :author_id, null: false
      t.integer :review_id, null: false
      t.string :reaction_type, null: false
      t.timestamps
    end
  end
end
