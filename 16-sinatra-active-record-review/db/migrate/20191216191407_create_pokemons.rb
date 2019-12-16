class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :max_cp
      t.integer :hp
      t.integer :trainer_id
    end
  end
end
