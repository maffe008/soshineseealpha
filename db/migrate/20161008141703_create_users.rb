# File Path : /db/migrate/20161008141703_create_users.rb
# Created by maffee on 16/10/8.

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
