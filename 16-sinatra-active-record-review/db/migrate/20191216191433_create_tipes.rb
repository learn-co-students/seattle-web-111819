class CreateTipes < ActiveRecord::Migration[5.2]
  def change
    create_table :tipes do |t|
    t.string :name
    end
  end
end
