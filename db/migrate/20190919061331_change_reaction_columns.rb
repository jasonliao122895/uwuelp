class ChangeReactionColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column  :reactions, :reaction_type
    add_column :reactions, :useful, :boolean, default: false, null: false
    add_column :reactions, :funny, :boolean, default: false, null: false
    add_column :reactions, :cool, :boolean, default: false, null: false
    add_index :reactions, [:author_id, :review_id], unique: true
  end
end
