class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.integer :base_attack
      t.integer :base_defense
      t.integer :base_stamina
      t.string :form
      t.integer :pokemon_id
      t.string :pokemon_name
    end
  end
end
