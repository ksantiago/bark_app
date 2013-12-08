class CreateDogs < ActiveRecord::Migration
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :user_id
      t.string :command

      t.timestamps
    end
  end
end
