class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :nickname
      t.string :contact
      t.integer :permission

      t.timestamps null: false
    end
  end
end
